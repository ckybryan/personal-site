import React, { Component } from "react";
import axios from "axios";
import "./SearchWithHighlight.css";

/**
 * Components
 */
import { LineLoader } from "../Loader";

const search_delay = 500;

class SearchWithHighlight extends Component {
  state = {
    searchString: "",
    timer: null,
    countryData: null,
    searching: false
  };

  searchCountry = txt => {
    this.setState({ searching: true });
    const url = `https://restcountries.eu/rest/v2/name/${txt}`;
    axios
      .get(url)
      .then(res => {
        this.setState({ searching: false, countryData: res.data });
      })
      .catch(() => {
        this.setState({ searching: false, countryData: "no results" });
      });
  };

  onTextChange = e => {
    const { value } = e.target;
    const { timer } = this.state;
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      this.searchCountry(value);
    }, search_delay);
    this.setState({ searchString: value, timer: newTimer });
  };

  charMatching = char => {
    const { searchString } = this.state;
    return searchString.toLowerCase().includes(char.toLowerCase());
  };

  renderCountryList = () => {
    const { countryData, searchString } = this.state;
    if (!countryData || !searchString) return null;
    if (countryData === "no results") {
      return (
        <div className="search-with-highlight-country-list">
          <p>no results</p>
        </div>
      );
    }
    const rows = countryData.map(country => {
      const { name } = country;
      const charArray = name.split("");
      return (
        <p key={name}>
          {charArray.map(c => (this.charMatching(c) ? <b>{c}</b> : c))}
        </p>
      );
    });

    return <div className="search-with-highlight-country-list">{rows}</div>;
  };

  render() {
    const { searching, searchString } = this.state;
    return (
      <div className="search-with-highlight-container">
        <label>Search Country Name</label>
        <input value={searchString} onChange={this.onTextChange} />
        {searching && <LineLoader width="100%" height="1px" />}
        {this.renderCountryList()}
      </div>
    );
  }
}

export default SearchWithHighlight;

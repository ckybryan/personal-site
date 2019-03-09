import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const SEARCH_DELAY = 500;

//Custom hook
const useCountryList = () => {
  const [countryList, setCountryList] = useState({
    data: null,
    loading: false,
    error: null
  });

  const fetchCountryList = searchString => {
    const url = `https://restcountries.eu/rest/v2/name/${searchString}`;
    setCountryList({ ...countryList, loading: true, error: null });
    axios
      .get(url)
      .then(res =>
        setCountryList({ data: res.data, loading: false, error: null })
      )
      .catch(() =>
        setCountryList({ ...countryList, loading: false, error: "no result" })
      );
  };

  return { countryList, fetchCountryList };
};

//component
const SearchWithHighlight = props => {
  const [searchString, setSearchString] = useState("");
  const [timer, setTimer] = useState(null);
  const { countryList, fetchCountryList } = useCountryList();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const suggestionBox = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => document.removeEventListener("click", handleOutSideClick);
  }, []);

  const handleOutSideClick = e => {
    if (!suggestionBox.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };

  const onTextChange = e => {
    const { value } = e.target;
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      fetchCountryList(value);
    }, SEARCH_DELAY);
    setTimer(newTimer);
    setSearchString(value);
  };

  const charMatching = char => {
    return searchString.toLowerCase().includes(char.toLowerCase());
  };

  const renderCountryList = () => {
    const { data, error, loading } = countryList;
    let content;

    if (loading) {
      content = (
        <div className="loading-wrap">
          loading... <i className="fa fa-spinner fa-spin" />
        </div>
      );
    } else if (error) {
      content = <p>No Results</p>;
    } else if (!data) {
      content = null;
    } else {
      content = data.map(country => {
        const { name } = country;
        const charArray = name.split("");
        return (
          <p key={name}>
            {charArray.map(c => (charMatching(c) ? <b>{c}</b> : c))}
          </p>
        );
      });
    }

    return (
      <div
        className={`search-with-highlight-country-list ${
          dropdownVisible ? "" : "collapsed"
        }`}
      >
        {content}
      </div>
    );
  };

  return (
    <div className="search-with-highlight-container" ref={suggestionBox}>
      <label>Search Country Name</label>
      <input
        value={searchString}
        onChange={onTextChange}
        onFocus={() => setDropdownVisible(true)}
      />
      {renderCountryList()}
    </div>
  );
};

export default SearchWithHighlight;

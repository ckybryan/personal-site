import React, { Component } from "react";
import axios from "axios";
import "./Javascript.css";

/**
 * Components
 */
import { PlainCodeBlock } from "../components/code_block";

class Javasctipt extends Component {
  state = {
    debounceSearchBarString: null
  };

  componentDidMount() {
    axios.get("./javascriptCode/debounceSearchBar.txt").then(res => {
      this.setState({ debounceSearchBarString: res.data });
    });
  }

  renderDebounceSearchBar = () => {
    const { debounceSearchBarString } = this.state;
    if (!debounceSearchBarString) return null;
    return (
      <div>
        <h3>1. How to do make a debounced search bar</h3>
        <PlainCodeBlock jsString={debounceSearchBarString} />
      </div>
    );
  };

  render() {
    return (
      <div className="JS-container">
        <h2 className="JS-title">Let's talk about Javascript</h2>
        <hr />
        {this.renderDebounceSearchBar()}
      </div>
    );
  }
}

export default Javasctipt;

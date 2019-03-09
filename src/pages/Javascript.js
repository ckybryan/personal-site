import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlainCodeBlock } from "../components/code_block";

const Javascript = () => {
  const [debounceSearchBarString, setDebounceSearchBarString] = useState(null);
  useEffect(() => {
    axios.get("./javascriptCode/debounceSearchBar.txt").then(res => {
      setDebounceSearchBarString(res.data);
    });
  }, []);

  const renderDebounceSearchBar = () => {
    if (!debounceSearchBarString) return null;
    return (
      <div>
        <h3>1. How to create a debounce search bar</h3>
        <PlainCodeBlock jsString={debounceSearchBarString} />
      </div>
    );
  };

  return (
    <div className="JS-container">
      <h2 className="JS-title">Let's talk about Javascript</h2>
      <hr />
      {renderDebounceSearchBar()}
    </div>
  );
};

export default Javascript;

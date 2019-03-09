import React, { useState, useEffect } from "react";
import Plus from "./image/plus.png";
import Minus from "./image/subtract.png";

const PlusMinus = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    spin();
  }, [value]);

  const spin = () => {
    var elm = document.querySelector(".plus-minus-btn.add");
    if (elm) {
      var degree = 90 * +value;
      elm.style.transform = "rotate(" + degree + "deg)";
    }
  };

  return (
    <div className="plus-minus-container">
      <button
        className="plus-minus-btn minus"
        onClick={() => setValue(value - 1)}
      >
        <img src={Minus} className="plus-minus-symbol" alt="minus" />
      </button>
      <span>{value}</span>
      <button
        className="plus-minus-btn add"
        onClick={() => setValue(value + 1)}
      >
        <img src={Plus} className="plus-minus-symbol" alt="plus" />
      </button>
    </div>
  );
};

export default PlusMinus;

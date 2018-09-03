import React, { Component } from "react";
import "./PlusMinus.css";
import Plus from "./image/plus.png";
import Minus from "./image/substract.png";

class PlusMinus extends Component {
  state = {
    value: 0
  };

  addValue = () => {
    var { value } = this.state;
    this.setState({ value: ++value }, () => {
      this.spin();
    });
  };

  minusValue = () => {
    var { value } = this.state;
    this.setState({ value: --value }, () => {
      this.spin();
    });
  };

  spin = () => {
    var elm = document.querySelector(".plus-minus-btn.add");
    if (elm) {
      const { value } = this.state;
      var degree = 90 * +value;
      elm.style.transform = "rotate(" + degree + "deg)";
    }
  };

  render() {
    return (
      <div className="plus-minus-container">
        <button className="plus-minus-btn minus" onClick={this.minusValue}>
          <img src={Minus} className="plus-minus-symbol" alt="minus"/>
        </button>
        <span>{this.state.value}</span>
        <button className="plus-minus-btn add" onClick={this.addValue}>
          <img src={Plus} className="plus-minus-symbol" alt="plus"/>
        </button>
      </div>
    );
  }
}

export default PlusMinus;

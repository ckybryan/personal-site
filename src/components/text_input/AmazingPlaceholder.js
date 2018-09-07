import React, { Component } from "react";
import "./AmazingPlaceholder.css";

class AmazingPlaceholder extends Component {
  state = {
    value: "",
    focused: false
  };

  render() {
    const { value, focused } = this.state;

    const focusedStyle =
      value || focused
        ? {
            top: "-14px",
            fontSize: "12px",
            left: 0,
            color: " #414141"
          }
        : {};
    return (
      <div className="amazing-placeholder-container">
        <input
          className="amazing-placeholder-input"
          value={value}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <label className="amazing-placehoder" style={focusedStyle}>
          Username
        </label>
      </div>
    );
  }
}

export default AmazingPlaceholder;

import React from "react";
import PropTypes from "prop-types";
import "./SelectableButton.css";

const SelectableButton = props => {
  const { text, onClick, active } = props;
  var style = active
    ? { borderLeft: "8px solid rgb(83, 125, 216)" }
    : { border: "1px solid #ddd" };
  return (
    <div
      className="selectable-button-container"
      style={style}
      onClick={() => onClick(text)}
    >
      <p>{text}</p>
    </div>
  );
};

SelectableButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default SelectableButton;

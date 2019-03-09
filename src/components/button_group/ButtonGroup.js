import React from "react";
import PropTypes from "prop-types";

const ButtonGroup = props => {
  const { options, selectedTxt, onSelect } = props;
  const btns = options.map((opt, index) => {
    const isActive = opt === selectedTxt;
    return (
      <button
        key={opt + index}
        className={`button-group-btn ${isActive ? "active" : ""}`}
        onClick={() => onSelect(opt)}
      >
        {opt}
      </button>
    );
  });

  return <div>{btns}</div>;
};

ButtonGroup.propTypes = {
  options: PropTypes.array,
  selectedTxt: PropTypes.string,
  onSelect: PropTypes.func
};

export default ButtonGroup;

import React from "react";
import PropTypes from "prop-types";
import "./ButtonGroup.css";

const ButtonGroup = props => {
  const { options, onSelect, currentActive } = props;
  const btns = options.map(txt => {
    const style = currentActive !== txt ? { border: "none" } : {};
    return (
      <button
        className="button-group-btn"
        style={style}
        key={txt}
        onClick={() => onSelect(txt)}
      >
        {txt}
      </button>
    );
  });
  return <div className="button-group-container">{btns}</div>;
};

ButtonGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentActive: PropTypes.string.isRequired
};

export default ButtonGroup;

import React from "react";
import PropTypes from "prop-types";
import "./TapGroup.css";

const TapGroup = props => {
  const { options, onSelect, currentActive } = props;
  const btns = options.map(txt => {
    const style = currentActive !== txt ? { border: "none" } : {};
    return (
      <button
        className="tap-group-btn"
        style={style}
        key={txt}
        onClick={() => onSelect(txt)}
      >
        {txt}
      </button>
    );
  });
  return <div className="tap-group-container">{btns}</div>;
};

TapGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentActive: PropTypes.string.isRequired
};

export default TapGroup;

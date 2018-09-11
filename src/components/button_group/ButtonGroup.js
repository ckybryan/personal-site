import React from "react";
import PropTypes from "prop-types";
import "./ButtonGroup.css";

const ButtonGroup = props => {
  const { options, selectedTxt, onSelect } = props;
  const btns = options.map((opt, index) => {
    const isActive = opt === selectedTxt;
    const isFirst = index === 0;
    const isLast = index === options.length - 1;
    var style = {
      borderTopLeftRadius: isFirst ? "5px " : 0,
      borderBottomLeftRadius: isFirst ? "5px" : 0,
      borderTopRightRadius: isLast ? "5px" : 0,
      borderBottomRightRadius: isLast ? "5px" : 0,
      borderRight: isLast ? "solid 1px #ddd" : "none"
    };
    if (isActive) {
      style = {
        ...style,
        backgroundColor: "rgba(72,207,173,0.05)",
        color: "rgba(72,207,173,1)",
        border: "1px solid rgba(72,207,173,1)"
      };
    }

    return (
      <button
        key={opt + index}
        className="button-group-btn"
        style={style}
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

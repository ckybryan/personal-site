import React from "react";
import PropTypes from "prop-types";
import "./LineLoader.css";

const LineLoader = props => {
  const style = {
    width: props.width || "100px",
    height: props.height || "3px"
  };
  return (
    <div className="line-loader-container" style={style}>
      <div className="line-loader " />
    </div>
  );
};

LineLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default LineLoader;

import React from "react";
import PropTypes from "prop-types";

const GlowingText = props => {
  return (
    <div className="glowing-text-container">
      <p className="glowing-text" name={props.text || ""}>
        {props.text || ""}
      </p>
    </div>
  );
};

GlowingText.propTypes = {
  text: PropTypes.string
};

export default GlowingText;

import React from "react";
import PropTypes from "prop-types";

const ErrorSnippet = props => {
  const { error, onHide } = props;
  if (!error) return null;
  const errorArray = typeof error === "string" ? [error] : error;
  const errorRows = errorArray.map((err, i) => {
    return (
      <p className="error-snippet-error" key={err + i}>
        - {err}
      </p>
    );
  });
  if (error.length === 0) return null;
  return (
    <div className="error-snippet-container">
      <p className="error-snippet-errorTitle">Error: </p>
      {errorRows}
      <i className="fa fa-times error-snippet-closeBtn" onClick={onHide} />
    </div>
  );
};

ErrorSnippet.propTypes = {
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

ErrorSnippet.defaultProps = {
  error: "",
  onHide: () => {}
};

export default ErrorSnippet;

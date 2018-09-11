import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PlainCodeBlock.css";

import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { xcode } from "react-syntax-highlighter/styles/prism";

class CodeBlock extends Component {
  renderCodeBlock = jsString => {
    const customStyle = { margin: 0 };
    return (
      <SyntaxHighlighter language="jsx" style={xcode} customStyle={customStyle}>
        {jsString}
      </SyntaxHighlighter>
    );
  };

  render() {
    return (
      <div className="plain-code-block-container">
        {this.renderCodeBlock(this.props.jsString)}
      </div>
    );
  }
}

CodeBlock.propTypes = {
  jsString: PropTypes.string
};

CodeBlock.defaultProps = {
  jsString: ""
};
export default CodeBlock;

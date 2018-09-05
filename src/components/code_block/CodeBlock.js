import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CodeBlock.css";

import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

/**
 * Components
 */
import { TapGroup } from "../index";

const options = ["jsx", "css"];
class CodeBlock extends Component {
  state = {
    view: options[0]
  };

  renderCodeBlock = () => {
    const { view } = this.state;
    const { jsString, cssString } = this.props;
    const customStyle={ margin: 0, width: "600px", height: "450px"}
    if (view === options[0]) {
      return (
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          customStyle={customStyle}
        >
          {jsString}
        </SyntaxHighlighter>
      );
    } else {
      return (
        <SyntaxHighlighter
          language="css"
          style={atomDark}
          customStyle={customStyle}
        >
          {cssString}
        </SyntaxHighlighter>
      );
    }
  };

  render() {
    return (
      <div className="code-block-container">
        <TapGroup
          options={options}
          onSelect={view => this.setState({ view })}
          currentActive={this.state.view}
        />
        {this.renderCodeBlock()}
      </div>
    );
  }
}

CodeBlock.propTypes = {
  jsString: PropTypes.string,
  cssString: PropTypes.string
};

CodeBlock.defaultProps = {
  jsString: "",
  cssString: ""
};
export default CodeBlock;

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AnimatedText.css";

const duration = 110;
const s_duration = 300;
class AnimatedText extends Component {
  state = {
    words: "",
  };

  componentDidMount() {
    const words_ = this.props.words;
    var d = duration;

    setTimeout(() => {
      for (let i = 0; i < words_.length; i++) {
        const w = words_[i];
        if (w === " ") {
          d += s_duration;
        } else if (w === ",") {
          d += s_duration * 4;
        } else {
          d += duration;
        }
        setTimeout(() => {
          this.setState(state => ({ words: state.words + w }));
        }, d);
      }
    }, 1000);
  }

  render() {
    const { words } = this.state;
    return (
      <div className="AT-container">
        <p>
          {words}
          <b className="AT-flashing">|</b>
        </p>
      </div>
    );
  }
}

AnimatedText.propTypes = {
  words: PropTypes.string.isRequired
};

export default AnimatedText;

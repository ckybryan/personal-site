import React, { Component } from "react";
import { withRouter } from "react-router";
import "./MenuBar.css";

/**
 * Components
 */
import { AnimatedText } from "../index";

const options = ["Home", "Reactjs", "React Native"];

class MenuBar extends Component {
  state = {
    expanded: false
  };

  renderOptions = (attr, clsName) => {
    const path = window.location.pathname;
    const btns = options.map(s => {
      const url = s.toLocaleLowerCase().replace(/ /g, "-");
      const active = path.includes(url) || (s === "Home" && path === "/");
      var style = {};
      if (active) {
        style[attr] = "#ED5565";
      }
      return (
        <button
          className={clsName}
          style={style}
          key={s + clsName}
          onClick={() => {
            this.setState({ expanded: false });
            this.props.history.push(`/${url}`);
          }}
        >
          {s}
        </button>
      );
    });
    return btns;
  };

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className="MB-container">
        <div>
          <AnimatedText words="Hi, my name is BryanChan." />
        </div>
        <div className="MB-menu">
          {this.renderOptions("borderBottomColor", "MB-btn")}
        </div>
        <div className="MB-hamberger">
          <i className="fa fa-bars" onClick={this.toggle} />
          <div className="MB-dropdown">
            {this.state.expanded &&
              this.renderOptions("color", "MB-dropdownBtn")}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuBar);

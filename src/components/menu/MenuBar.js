import React, { Component } from "react";
import { withRouter } from "react-router";

/**
 * Components
 */
import { AnimatedText } from "../index";

const options = ["Home", "Reactjs", "Javascript"];

class MenuBar extends Component {
  state = {
    expanded: false
  };

  renderOptionBtns = (attr, clsName) => {
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

  renderHambergerBtn = () => {
    const { expanded } = this.state;
    return (
      <div
        className={expanded ? "MB-hamberger active" : "MB-hamberger"}
        onClick={this.toggle}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  };

  renderDropDownList = () => {
    const { expanded } = this.state;
    return (
      <div className={expanded ? "MB-dropdown expanded" : "MB-dropdown"}>
        {this.renderOptionBtns("color", "MB-dropdownBtn")}
      </div>
    );
  };

  render() {
    return (
      <div className="MB-container">
        <div>
          <AnimatedText words="Hi, my name is BryanChan." />
        </div>
        <div className="MB-menu">
          {this.renderOptionBtns("borderBottomColor", "MB-btn")}
        </div>
        <div className="MB-hamberger-container">
          {this.renderHambergerBtn()}
          {this.renderDropDownList()}
        </div>
      </div>
    );
  }
}

export default withRouter(MenuBar);

import React, { Component } from "react";
import "./PopupSelect.css";

const options = ["Active", "Pending", "Cancel"];
class PopupSelect extends Component {
  state = {
    selected: options[0],
    hovered: false,
    clicked: false
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOutSideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutSideClick);
  }

  handleOutSideClick = e => {
    if (this.PopupBtn && !this.PopupBtn.contains(e.target)) {
      this.setState({ clicked: false });
    }
  };

  render() {
    const { selected, hovered, clicked } = this.state;
    var color;
    var background;

    switch (selected) {
      case options[1]:
        //yellow
        color = "yellow";
        background = "rgba(246, 187, 66, 0.1)";
        break;
      case options[2]:
        //gray
        color = "gray";
        background = "#f7f7f7";
        break;
      case options[0]:
      default:
        color = "green";
        background = "rgba(145, 225, 175,0.2)";
    }

    const onSelect = selected => this.setState({ selected, clicked: false });
    const capitalizeString = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
    const btnCls = `popup-select-btn ${hovered ? "hovered" : ""} ${color}`;
    const arrowCls = `popup-select-arrow fa fa-chevron-down ${
      hovered ? color : ""
    }`;
    const activeCircleCls = `popup-select-circle bg${capitalizeString(color)}`;
    return (
      <div className="popup-select-container">
        <button
          className={btnCls}
          style={{ background }}
          onMouseOver={() => this.setState({ hovered: true })}
          onMouseOut={() => this.setState({ hovered: false })}
          onClick={() => this.setState({ clicked: true })}
          ref={e => (this.PopupBtn = e)}
        >
          <span className={activeCircleCls} />
          <span className="popup-select-txt">
            {selected}
            <i className={arrowCls} />
          </span>
        </button>
        <div className={"popup-select-list" + (clicked ? " active" : "")}>
          <div className="row green" onClick={() => onSelect(options[0])}>
            <i className="popup-select-circle bgGreen" />
            {options[0]}
          </div>
          <div className="row yellow" onClick={() => onSelect(options[1])}>
            <i className="popup-select-circle bgYellow" />
            {options[1]}
          </div>
          <div className="row gray" onClick={() => onSelect(options[2])}>
            <i className="popup-select-circle bgGray" />
            {options[2]}
          </div>
        </div>
      </div>
    );
  }
}

export default PopupSelect;

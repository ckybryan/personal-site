import React, { Component } from "react";
import { SelectableButton } from "../../components/button";

class SelectableButtonShowCase extends Component {
  state = {
    active: []
  };

  handleClick = txt => {
    const { active } = this.state;
    const index = active.indexOf(txt);
    if (index !== -1) {
      active.splice(index, 1);
    } else {
      active.push(txt);
    }
    this.setState({ active });
  };

  renderBtns = () => {
    const options = ["one", "two", "three"];
    return options.map((txt, index) => {
      const { active } = this.state;
      const selected = active.indexOf(txt) !== -1;
      return (
        <SelectableButton
          key={txt + index}
          active={selected}
          onClick={this.handleClick}
          text={txt}
        />
      );
    });
  };
  render() {
    return this.renderBtns();
  }
}

export default SelectableButtonShowCase;

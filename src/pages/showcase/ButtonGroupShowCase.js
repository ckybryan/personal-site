import React, { Component } from "react";
import { ButtonGroup } from "../../components/button_group";

const ButtonGroupOpts = ["Life", "Is", "Hard"];
class ButtonGroupShowCase extends Component {
  state = {
    selectedTxt: ButtonGroupOpts[0]
  };
  render() {
    return (
      <ButtonGroup
        options={ButtonGroupOpts}
        onSelect={selectedTxt => this.setState({ selectedTxt })}
        selectedTxt={this.state.selectedTxt}
      />
    );
  }
}
export default ButtonGroupShowCase;

import React, { Component } from "react";
import { ButtonGroup } from "../components/button_group";

const options = ["one", "two", "three"];
class TestPage extends Component {
  state = {
    selectedTxt: options[0]
  };

  render() {
    return (
      <ButtonGroup
        options={options}
        onSelect={selectedTxt => this.setState({ selectedTxt })}
        selectedTxt={this.state.selectedTxt}
      />
    );
  }
}

export default TestPage;

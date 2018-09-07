import React, { Component } from "react";
import { ErrorSnippet } from "../../components/error";

class ErrorSnippetShowCase extends Component {
  state = {
    errors: [],
    count: 0
  };
  generateError = () => {
    const options = [
      "Go to the washroom",
      "Take a shit",
      "point at the toilet",
      "say: 'eat that shit !'",
      "flush the toilet",
      "Hope you feel better",
      "No more",
      "I mean it, no more",
      "Still trying bro?",
      "K, you win"
    ];

    const { count, errors } = this.state;
    const newCount = count === options.length - 1 ? 0 : count + 1;
    const newErrors = errors;
    newErrors.push(options[count]);
    this.setState({ errors: newErrors, count: newCount });
  };

  render() {
    return (
      <div>
        <ErrorSnippet
          error={this.state.errors}
          onHide={() => this.setState({ errors: [], count: 0 })}
        />
        <br />
        <button className="RE-error-gen-btn" onClick={this.generateError}>
          Done With Life?
        </button>
      </div>
    );
  }
}

export default ErrorSnippetShowCase;

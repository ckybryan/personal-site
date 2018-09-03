import React, { Component } from "react";
import axios from "axios";
import "./ReactPage.css";

/**
 * Components
 */
import { LineLoader, CodeBlock } from "../components";

const componentArray = [
  {
    name: "LineLoader",
    component: LineLoader,
    description: "I just feel like a normal spinner is too ugly"
  }
];

class ReactPage extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    const filePaths = componentArray.reduce((acc, cv) => {
      const { name } = cv;
      const js = `${name}.js.txt`;
      const css = `${name}.css.txt`;
      return acc.concat([js, css]);
    }, []);

    filePaths.map(path => {
      axios
        .get(`./rawCode/${path}`)
        .then(res => {
          const { data } = this.state;
          data[path] = res.data;
          this.setState({ data });
          return null;
        })
        .catch(e => {
          console.log(e);
        });
      return null;
    });
  }

  renderComponentBlock = () => {
    const { data } = this.state;
    return componentArray.map(obj => {
      const { name, component, description } = obj;
      const js = `${name}.js.txt`;
      const css = `${name}.css.txt`;
      const jsString = data[js];
      const cssString = data[css];
      if (jsString && cssString) {
        return (
          <div className="RE-componentBlock" key={name}>
            <div className="RE-componentWrap">
              <h3 className="RE-componentName">{name}</h3>

              <div className="RE-actualComponent">
                {React.createElement(component, null)}
              </div>

              <div className="RE-componentDescription">
                <p> - {description}</p>
              </div>
            </div>

            <div className="RE-codeBlock">
              <CodeBlock jsString={jsString} cssString={cssString} />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="RE-container">
        <h2 className="RE-title">Components that I built</h2>
        {this.renderComponentBlock()}
      </div>
    );
  }
}

export default ReactPage;

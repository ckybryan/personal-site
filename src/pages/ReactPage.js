import React, { Component } from "react";
import axios from "axios";
import "./ReactPage.css";

/**
 * Components
 */
import { LineLoader, CodeBlock } from "../components";

const componentArray = [{ name: "LineLoader", component: LineLoader }];

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
      const { name, component } = obj;
      const js = `${name}.js.txt`;
      const css = `${name}.css.txt`;
      const jsString = data[js];
      const cssString = data[css];
      if (jsString && cssString) {
        return (
          <div className="RE-componentBlock" key={name}>
            <h3 className="RE-componentName">{name}</h3>
            {React.createElement(component, null)}
            <CodeBlock jsString={jsString} cssString={cssString} />
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

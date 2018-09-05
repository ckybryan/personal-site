import React, { Component } from "react";
import axios from "axios";
import "./ReactPage.css";

/**
 * Components
 */
import { LineLoader, CodeBlock, PlusMinus, ButtonGroup } from "../components";

//ButtonGroup class
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

const componentArray = [
  {
    name: "ButtonGroup",
    component: <ButtonGroupShowCase />,
    description: "Yea, life is hard bro",
    createDate: "Sep 4, 2018"
  },
  {
    name: "PlusMinus",
    component: <PlusMinus />,
    description: "Life needs a little spin",
    createDate: "Sep 3, 2018"
  },
  {
    name: "LineLoader",
    component: <LineLoader />,
    description: "left, right, left....",
    createDate: "Aug 30, 2018"
  }
];

class ReactPage extends Component {
  state = {
    data: {},

    //ButtonGroupState
    buttonGroupActiveTxt: ButtonGroupOpts[0]
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
      const { name, component, description, createDate } = obj;
      const js = `${name}.js.txt`;
      const css = `${name}.css.txt`;
      const jsString = data[js];
      const cssString = data[css];
      if (jsString && cssString) {
        return (
          <div className="RE-componentBlock" key={name}>
            <div className="RE-componentWrap">
              <h3 className="RE-componentName">
                {name} <i>- {createDate}</i>
              </h3>

              <div className="RE-actualComponent">{component}</div>

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

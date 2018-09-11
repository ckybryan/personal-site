import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, ReactPage, TestPage, Javascript } from "./pages";
import { MenuBar } from "./components";
import "../node_modules/font-awesome/css/font-awesome.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Switch>
          <Route path="/test" component={TestPage} />
          <Route path="/reactjs" component={ReactPage} />
          <Route path="/javascript" component={Javascript} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

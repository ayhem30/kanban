import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home/Home";
import BoardContainer from "./Board/BoardContainer";
import "./App.scss";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/b/:boardId" component={BoardContainer} />
      <Redirect to="/" />
    </Switch>
  );
};

// Use withRouter to prevent strange glitch where other components
// lower down in the component tree wouldn't update from URL changes
export default withRouter(App);

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Redux/store"
import "./App.css";
import LandingPage from "./Container/LandingPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

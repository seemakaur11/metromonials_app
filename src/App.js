import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Career from "./components/Career";
import Family from "./components/Family";
import Home from "./components/Home";
import Register from "./components/Register";
import Verify from "./components/Verify";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/career" component={Career} />
          <Route path="/family" component={Family} />
          <Route path="/verify" component={Verify} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

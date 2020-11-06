import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";
import Hotels from "./screens/Hotels";
import Notifications from "./screens/Notifications";
import Payments from "./screens/Payments";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Sidebar />

          <section className="wMax1000 panel flex-one pl12em pr12em">
            <Dashboard />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/hotels" component={Hotels} />
              <Route exact path="/notifications" component={Notifications} />
              <Route exact path="/payments" component={Payments} />
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};

export default App;

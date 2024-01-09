import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CallerContent from "./CallerContent.jsx";
import CallerDetails from "./CallerDetails.jsx";


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container-view">
          <Route path="/" exact component={CallerContent} />
          {/* <Route path="/" exact component={CallerId} /> */}
          <Route path="/:id" exact component={CallerDetails} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
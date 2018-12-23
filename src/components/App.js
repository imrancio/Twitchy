import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// <Link> replaces <a> and keeps state on new route
// URL still changes but does not request new HTML
const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/2">Navigate to 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to="/">Navigate to 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

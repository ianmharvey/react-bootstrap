import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Products from "./components/Products";
import Essay from "./components/Essay";
import Error from "./components/Error";

class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products" component={Products} />
          <Route path="/essay" component={Essay} />
          <Route component={Error} />
       </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

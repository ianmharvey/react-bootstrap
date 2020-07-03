import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Products from "./components/Products";
import Phones from "./components/Phones";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Error from "./components/Error";

//const Test = () => <div>Test</div>;

class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/phones" component={Phones} />
          <Route exact path="/page3" component={Page3} />
          <Route exact path="/page4" component={Page4} />
          <Route component={Error} />
       </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

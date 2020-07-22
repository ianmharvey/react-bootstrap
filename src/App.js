import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import "./App.css";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Products from "./components/Products";
import Phones from "./components/Phones";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Error from "./components/Error";

const Login = () => <>
                     <Container className="mt-5">
                       <h1>Login Page</h1>
                     </Container>
                   </>

const Test = () => <>
                     <Container className="mt-5">
                       <h1>Test Page</h1>
                     </Container>
                   </>;

class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products" component={Products} />
          <Route path="/phones" component={Phones} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route component={Error} />
       </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

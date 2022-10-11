import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import Main from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
//App is a React component class that receives parameters and calls props (properties)
class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

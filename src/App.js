import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
//App is a React component class that receives parameters and calls props (properties)
class App extends Component {
  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restorable Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
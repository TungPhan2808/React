import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
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

import React, { Component } from "react";
import GlobalStyles from "./components/Globals/GlobalStyles";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Home />
      </>
    );
  }
}

export default App;

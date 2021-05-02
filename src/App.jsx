import React, { Component } from "react";
import Movies from "./components/movies";
import Navbarey from "./components/navbar";

class App extends Component {
  render() {
    return (
      <main>
        <Navbarey />
        <Movies />
      </main>
    );
  }
}

export default App;

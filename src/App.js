import React, { Component } from "react";
import Navbar from './component/Navbar'
import Header from './component/Header'
import Search from './component/Search'
import Body from './component/Body'
import Hotkek from "./component/Hotkek";

class App extends Component {
  render() {
    return (
        <div className="main-body">
          <Navbar />
          <Header />
          <Search />
          <Body />
          <Hotkek />
        </div>
    );
  }
}

export default App;

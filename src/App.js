import React, { Component } from "react";
import "@babel/polyfill";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

import AppRouter from "./routers/AppRouter";

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;

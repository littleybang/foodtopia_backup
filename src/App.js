import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Nav from "./components/nav/Nav.js";
import Loginform from './components/logInform/Loginform.js';
import Head_slider from './components/head_slider/head_slider.js';
import Recommend from './components/recommend/recommend.js';
import Day_rank from './components/rank/day_rank.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Loginform />
          <Head_slider />
          <div className="middle_section container d-flex justify-content-center">
            <Recommend />
            <Day_rank />
          </div>
          
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

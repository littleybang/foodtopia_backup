import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./head_slider.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

library.add(faAngleRight)
library.add(faAngleLeft)

class Head_slider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <React.Fragment>
            <div className="wrapper my-0 mx-auto position-relative">
            
                <div className="position-absolute arrow_area arrow_area_left d-flex justify-content-center align-items-center" id="left">
                    <FontAwesomeIcon icon="angle-left" />
                </div>
                <div className="position-absolute arrow_area arrow_area_right d-flex justify-content-center align-items-center" id="right">
                    <FontAwesomeIcon icon="angle-right" />
                </div>
                
                <ul id="slider" className="list-unstyled position-absolute slider_wrap d-flex">
                    <img src={require('./images/hero11.jpg')} />
                    <img src={require('./images/hero22.jpg')} />
                    <img src={require('./images/hero33.jpg')} />
                </ul>
                
                <ul id="paging" className="list-unstyled paging position-absolute d-flex justify-content-center">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
          </React.Fragment>
        );
      }
    }

export default Head_slider;
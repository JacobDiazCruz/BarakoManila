import React, { Component } from 'react';
import '../App.css';
import {Fade, Flip, Zoom, Roll} from 'react-reveal';

class HomeFourth extends Component {
  render() {
    return (
        <React.Fragment>
            <Fade top>
            <div className="fourth-container">
                <Fade bottom>
                <h1 id="fourth-header">A COFFEE A DAY KEEPS THE DOCTOR AWAKE</h1>
                </Fade>
                <Fade left duration={2000}>
                <img src="espresso.png" id="espresso"/>
                </Fade>
                <Fade top duration={2000}>
                <img src="drinking.png" id="drinking"/>
                </Fade>
                <Fade right duration={2000}>
                <img src="cup-img.png" id="cup-img"/>
                </Fade>
            </div>
            </Fade>
        </React.Fragment>
      );
  }
}

export default HomeFourth;

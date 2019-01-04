import React, { Component } from 'react';
import '../App.css';
import {Fade, Flip, Zoom, Roll} from 'react-reveal';

class HomeThird extends Component {
  render() {
    return (
        <div className="third-container">
        	<div id="card1">
                <Roll left>
                <img src="coffee-farmer.png" id="coffee-farmer1"/>
                </Roll>
                <Fade left>
                <img src="coffee-beans.png" id="coffee-beans"/>
                </Fade>
            </div>
            <div id="card2">
                <Roll right>
                <img src="coffee-farmer2.png" id="coffee-farmer2"/>
                </Roll>
            </div>
        </div>
      );
  }
}

export default HomeThird;

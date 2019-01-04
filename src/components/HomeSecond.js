import React, { Component } from 'react';
import '../App.css';
import {Fade, Flip, Zoom, Roll} from 'react-reveal';

class HomeSecond extends Component {
  render() {
    return (
        <div className="second-container">
        	<div id="column-1">
        		<Fade bottom duration={1000}>
	        		<h6>Did you know?</h6>
	        		<br/>
	        		<p id="trivia">Coffee helps to prevent Alzheimer's,
	        		<br/>Hearth Disease, Gout, Type 2 Diebetes and Parkinson's.<br/>
	        		<br/>Two cups of coffee can cut post-workout muscle pain by up to 48%.<br/>
	        		<br/>A cup of brewed coffee represents a contribution of up to 1.8 grams of fiber<br/>of the recommended intake of 20-38 grams.
	        		</p>
	        	</Fade>
        	</div>
        	<div id="column-2">
        		<Roll right>
        		<img src="coffee-spill.jpg" id="coffee-spill"/>
        		</Roll>
        	</div>
        </div>
      );
  }
}

export default HomeSecond;

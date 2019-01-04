import React, { Component } from 'react';
import '../App.css';
import { slide as Menu } from 'react-burger-menu'
import {Fade, Flip, Zoom} from 'react-reveal';

class Navbar extends Component {

  render() {
    return (
    	<Menu>
    		<p id="main-logo-nav">Barako Manila</p>
    		<ul>
	    		<li><a id="home" className="link" href="/">Home</a></li>
	        	<li><a id="socialize" className="link" href="/about">Socialize</a></li>
	        	<li><a id="support-local" className="link" href="/contact">Support Local</a></li>
	        	<li><a id="contact" className="link" href="">Contact Us</a></li>
	        </ul>
      	</Menu>
      );
  }
}

export default Navbar;

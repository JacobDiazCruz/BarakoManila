import React, { Component } from 'react';
import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

class Template extends Component {

  render() {
    return (
    	<React.Fragment>
    		<Navbar/>
    		<Home/>
    		<Footer/>
    	</React.Fragment>
    );
  }
}

export default Template;

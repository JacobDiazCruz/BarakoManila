import React, { Component } from 'react';
import '../App.css';
import { slide as Menu } from 'react-burger-menu'
import {Fade, Flip, Zoom} from 'react-reveal';

class Footer extends Component {

  render() {
    return (
      <React.Fragment>
        <Fade bottom>
      	<footer className="page-footer font-small blue pt-4 mt-4">
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-6" id="footer-row">
              <h6 className="new text-small" id="footer-text">+63 9455061297 &nbsp; | &nbsp; carljacobdiazcruz@gmail.com</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
              <p className="footer-p">created by: Jacob Cruz</p>
              <p id="mainLogo-footer">Barako Manila</p>
              <p className="footer-p-2018">@2018 Barako Manila.</p>
              </div>
        </footer>
        </Fade>
      </React.Fragment>
    )
  }
}

export default Footer;

import React, { Component } from 'react';
import '../App.css';
import HomeSecond from './HomeSecond';
import HomeThird from './HomeThird';
import HomeFourth from './HomeFourth';
import HomeFifth from './HomeFifth';
import {Fade, Flip, Zoom, Roll} from 'react-reveal';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

class Home extends Component {

  render() {
    return (
    	<React.Fragment>
    		<Fullpage>
	    		<FullPageSections>
			        <FullpageSection className="home">
			        	<div id="right-container">
			        		<Fade clear duration={3000}>
			        		<p id="main-logo">Barako Manila</p>
			        		</Fade>
				        </div>
				        <div id="left-container">
				        	<Fade clear duration={2000}>
				        	<div id="image">
				        	</div>
				        	</Fade>
				        </div>
			        </FullpageSection>
			        <FullpageSection>
			        	<HomeSecond/>
			        </FullpageSection>
			        <FullpageSection>
			        	<HomeFourth/>
			        </FullpageSection>
			        <FullpageSection>
			        	<HomeFifth/>
			        </FullpageSection>
			        <FullpageSection>
			        	<HomeThird/>
			        </FullpageSection>
		        </FullPageSections>
	        </Fullpage>
        </React.Fragment>
      );
  }
}

export default Home;

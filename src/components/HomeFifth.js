import React, { Component } from 'react';
import '../App.css';
import {Fade, Flip, Zoom, Roll} from 'react-reveal';

class HomeFifth extends Component {
  render() {
    return (
        <React.Fragment>
        <Fade clear duration={2000}>
        <div className="fifth-container">
            <div class="row">
              <div class="col-sm-3">
                <div class="card">  
                  <div class="card-body">
                    <h5 class="card-title">Espresso</h5>
                    <img src="coffee-beans.png" id="arabica"/>
                    <p class="card-text">Espresso beans will give you consistency, body, and flavor you 
                    want in your shot.<br/><br/>Espresso beans usually produce a rich Crema, which enhances your
                    espresso shot experience. <br/><br/>Espresso beans hold up best with high-pressure methods.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Liberica</h5>
                    <img src="liberica.png" id="arabica"/>
                    <p class="card-text">Liberica beans are larger than the others, often asymmetrical, and is the only coffee bean in the world that has such an irregular shape. The beans are said to have a unique aroma, consisting of floral and fruity notes, with a full body that possesses a smoky taste; those who have had
                     Liberica coffee say that it is unlike any coffee they have ever tasted.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Robusta</h5>
                    <img src="robusta.png" id="arabica"/>
                    <p class="card-text">Robusta makes a coffee that has more crema, more antioxidants, more caffeine, and more kick. It is easy to grow because it gives 
                    high yielding crops and it is disease and bug resistant.This makes for a stronger, less acidic, but more bitter coffee.
                    The best Italian espressos are a blend of Arabica and Robusta beans. They have the perfect crema on top and that added morning jolt.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Arabica</h5>
                    <img src="arabica.png" id="arabica"/>
                    <p class="card-text">About five percent of coffee production in the Philippines is 
                    the higher grade Arabica coffee which is known as Kapeng Tagalog while seven percent
                     is the Excelsa varietal which is resistant to drought.About three percent of Philippine
                    coffee is the Liberica Coffee varietal and known as Kapeng Barako, favored for its ability to grow in a variety of soil types.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </Fade>
        </React.Fragment>
      );
  }
}

export default HomeFifth;

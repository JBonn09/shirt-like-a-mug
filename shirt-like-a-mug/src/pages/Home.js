import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import Si from "../components/signIn"
import './home.css';





class Home extends Component {
  render() {
    return (


     
       
      <div class="image">
       <div class="carousel-holder">
       
          <Si/>
        <DemoCarousel/>
        <div>

        <Contact/>
        </div>
      </div>
      </div>

    );
  }
};


export default Home;

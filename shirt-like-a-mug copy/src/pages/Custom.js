import React, { Component } from 'react';
// import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
// import Contact from "../components/footer"
// import Si from "../components/signIn"
import { Link, NavLink } from "react-router"
import './home.css';
import App from '../App';
import pictures from "../components/Images/pictures"

import photos from "../components/Images/pictures.js";

console.log(photos);





class premade extends Component {
  state = {
    photos: photos
  }
  
  log = () =>{
    console.log(this.state.data.shirt.img);
  }
  render() {
    console.log(this.state.photos);
    return (

      <div className="image" onClick={()=>this.log()}>
        <TheBar/>

        
        <img src={this.state.photos.photoOne} alt="" />
        <img src={this.state.photos.photoTwo} alt="" />
        <img src={this.state.photos.photoThree} alt="" />
        
       </div>

    );
  }
};


  export default premade;
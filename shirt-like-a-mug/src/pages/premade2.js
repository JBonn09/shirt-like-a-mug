import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import Si from "../components/signIn"
import './home.css';
import pictures from "../components/images/pictures"



class Premade2 extends Component {
    state = {
        photos: pictures
    }
    render() {
        console.log(this.state.photos);
        return (

            <div>
                <p>Custom</p>
            <img src={this.state.photos.photoOne.url}/>
            <img src={this.state.photos.photoTwo.url}/>
            </div>

        );
    }
};


export default Premade2;

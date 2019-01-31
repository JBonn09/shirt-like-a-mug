import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import './home.css';
import pictures from "../components/Images/pictures"



class Custom extends Component {
    state = {
        photos: pictures
    }
    render() {
        console.log(this.state.photos);
        return (

            <div>
                <TheBar />
                <p>Custom</p>
                <img src={this.state.photos.photoOne.url} />
                <img src={this.state.photos.photoTwo.url} />
                <Contact />
            </div>

        );
    }
};


export default Custom;

import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import Si from "../components/signIn"
import './home.css';




class Custom extends Component {
    render() {
        return (

            <div>
                <TheBar />
                <p>Custom</p>
                <Contact />
            </div>

        );
    }
};


export default Custom;
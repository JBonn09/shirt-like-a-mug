import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import Si from "../components/signIn"
import './home.css';




class Premade extends Component {
    render() {
        console.log("I am")
        return (


            <div id="card">
                <img src="" >Product 1</img>
                <div class="container">
                    <span>Quantity</span><input type=""></input>
                    <button>buy</button>
                </div>
            </div>

        );
    }
};


export default Premade;
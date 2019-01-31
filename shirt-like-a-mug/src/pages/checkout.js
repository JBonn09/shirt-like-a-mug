import React, { Component } from 'react';
import Contact from "../components/footer"
import TheBar from "../components/Navbar"
import './home.css';




class Checkout extends Component {
  render() {
    return (

      <div>
        <TheBar />
        <h1>Checkout</h1>
        <Contact />


      </div>

    );
  }
};


export default Checkout;
import React, { Component } from 'react';
import TheBar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Home from './pages/Home';

import premade from './pages/custom'
import Checkout from './pages/checkout'
import NavBar from "./components/Navbar"
import footer from "./components/footer"



class App extends Component {
  render() {
    return (

      <Router>
        <div>

          <Switch>
<<<<<<< HEAD
            <Route exact path="/premade" component={Premade} />
            <Route exact path="/custom" component={Custom} />
=======

            <Route exact path="/custom" component={premade} />
           
>>>>>>> final-project-pulled-code
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="*" component={Home} />
          </Switch>
        </div>
      </Router>


    );
  }
};




export default App;

import React, { Component } from 'react';
import TheBar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Home from './pages/Home';

import custom from './pages/custom'
import premade from './pages/premade'
import Checkout from './pages/checkout'
import NavBar from "./components/Navbar"
import footer from "./components/footer"



class App extends Component {
  render() {
    return (

      <Router>
        <div>

          <Switch>

            <Route exact path="/custom" component={custom} />
            <Route exact path="/premade" component={premade} />
           
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="*" component={Home} />
          </Switch>
        </div>
      </Router>


    );
  }
};




export default App;

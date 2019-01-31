import React, { Component } from 'react';
import TheBar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'

import Home from './pages/Home';

import Premade from './pages/custom'
import Checkout from './pages/checkout'
import Custom from "./pages/premade"
import NavBar from "./components/Navbar"
import footer from "./components/footer"



class App extends Component {
  render() {
    return (

      <Router>
        <div>

          <Switch>

          <Switch>
            <Route exact path="/premade" component={Premade} />
            <Route exact path="/custom" component={Custom} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="*" component={Home} />
          </Switch>
          </Switch>
        </div>
      </Router>


    );
  }
};




export default App;

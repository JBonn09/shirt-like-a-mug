import React, { Component } from 'react';
import TheBar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import 'bulma/css/bulma.css'
import NavBar from "./components/Navbar"

class App extends Component {
  render() {
    return (

      <Router>
      <div>
     <NavBar/>

    

          <Switch>
            <Route exact path="/" component={Home} />


          </Switch>
        </div>
      </Router>


    );
  }
};


export default App;

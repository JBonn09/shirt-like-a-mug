import React, { Component } from 'react';
import './App.css';
import TheBar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';


class App extends Component {
  render() {
    return (

      <Router>
        <div>
            <TheBar/>

          <Switch>
            <Route exact path="/" component={Home} />


          </Switch>
        </div>
      </Router>


    );
  }
};


export default App;

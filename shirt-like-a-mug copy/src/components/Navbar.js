import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
import "./NavBar.css"
import slam from '../components/Images/slam.png'

// import { Link } from react-router


const TheBar = props => {
  return (


    <aside class="menu">
      <img src={slam} />
      <li>
      <a class="is-active">Shirts</a>
      </li>
      <ul class="menu-list">
        <li><NavLink to="/Custom">Short sleeve</NavLink></li>
        <li><a>Long Sleeve</a></li>
      </ul>
      <p class="menu-label">
        Administration
    </p>
   
    <ul class="menu-list">
        <li><a>Short sleeve</a></li>
        <li><a>Long Sleeve</a></li>
      </ul>
 
      <ul class="menu-list">
        <li>
          
          <a class="is-active">MUGS</a>
          <ul>
            
            <li><a>Small like a Mug</a></li>
            <li><a>Big like a Mug</a></li>
          </ul>
        </li>
        
        <li><a>Baby Tee's</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        About Us
    </p>
    </aside>

  )
}

export default TheBar;

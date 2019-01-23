import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
import "./NavBar.css"
import slam from './images/slam.png'
const TheBar = props => {
  return (


    <aside class="menu">
      <img src={slam} />
      <a class="is-active">

        Shirts</a>

      <ul class="menu-list">
        <li><a>Short sleeve</a></li>
        <li><a>Long Sleeve</a></li>
        <li>In Stock</li>
      </ul>
      <p class="menu-label">
        Administration
    </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">MUGS</a>
          <ul>
            <li><a>Small like a Mug</a></li>
            <li><a>Big like a Mug</a></li>
            <li><a>In Stock Mugs</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
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

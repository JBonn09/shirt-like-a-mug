import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
import "./NavBar.css"
const TheBar = props => {
  return (
    <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a class="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul>
  </aside>

// <SideNav defaultSelectedPath="1">
// <Nav id="1">
//     <Icon icon={item1}/>
//     Item 1
// </Nav>
// <Nav id="2">
//     <Icon icon={item2}/>
//     Item 2
// </Nav>
// <Nav id="3">
//     <Icon icon={item2}/>
//     Item 3
// </Nav>
// </SideNav>
  
      )
    }
    
    export default TheBar;

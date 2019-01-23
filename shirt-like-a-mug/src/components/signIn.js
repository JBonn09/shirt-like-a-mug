import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'

const Si = props => {
  return (
    <div class="field">
    <p class="control has-icons-left has-icons-right"/>
      <input class="input" type="email" placeholder="Email"/>
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    
  
  
    <p class="control has-icons-left"/>
      <input class="input" type="password" placeholder="Password"/>
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
   
  
    <p class="control"/>
      <button class="button is-success">
        Login
      </button>
   
  </div>
  )
}

export default Si;
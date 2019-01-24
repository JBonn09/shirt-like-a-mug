import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
import "./Si.css"


const Si = props => {
  return (
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
  )
}

export default Si;
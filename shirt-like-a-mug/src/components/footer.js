import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
import slam3 from './images/slam3.png'
import "./footer.css"



const Contact = props => {
  return (
   
      
      <div class="field">
      <aside class="contactUs">Contact Us</aside>
  <label class="label">Name</label>
  
    <input class="input" type="text" placeholder="e.g Alex Smith"/>
 


  <label class="label">Email</label>
 
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>

    <label class="label">Tell us something</label>

      <textarea class="textarea" placeholder="10 lines of textarea" rows="10">
      </textarea><img src={slam3} />
   </div>

   
    
        )
      }
      
      export default Contact;

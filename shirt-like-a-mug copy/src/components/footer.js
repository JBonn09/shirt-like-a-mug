import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css'
// import slam5 from './images/pictures'
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
      
      </textarea>
      <a class="button is-warning">Warning</a>
      {/* <button class="button">Send</button> */}
      {/* <img style={{width: '900px', height: '500px'}} src={slam5} /> */}
      
   </div>

   
    
        )
      }
      
      export default Contact;

import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Columns, Container, Section, Navbar } from 'react-bulma-components/full'
import 'bulma/css/bulma.css'
import "./NavBar.css"
import slam from './Images/slam.png'


class TheBar extends Component {
  render() {
    return (

      <Navbar color="dark" fixed={'sticky'}>
        <Navbar.Brand>
<<<<<<< HEAD
          <Navbar.Item renderAs="a" href="*"><NavLink to="/">
            <img style={{ width: '50px', height: '100px' }}
=======
          <Navbar.Item renderAs="a" href="*"><NavLink to="*">
            <img style={{ width: '70px', height: '100px' }}
>>>>>>> final-project-pulled-code
              src={slam} />



          </NavLink>
          </Navbar.Item>
          {/* <Navbar.Burger
            active={open}
            onClick={() =>
              this.setState(state => {
                open: !state.open;
              })
            }
          /> */}
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item >
              <div class="buttons">
                <a class="button is-danger">
                  <strong>
                    <NavLink to="/premade">Templates</NavLink>
                  </strong>
                </a>
              </div>
            </Navbar.Item>
            <Navbar.Item >
              <div class="buttons">
                <a class="button is-danger">
                  <strong>
                    <NavLink to="/custom">Shirts & Mugs</NavLink>
                  </strong>
                </a>
              </div>
            </Navbar.Item>
            <Navbar.Item >
              <div class="buttons">
                <a class="button is-danger">
                  <strong>
                    <NavLink to="/checkout">Shopping Cart</NavLink>
                  </strong>
                </a>
              </div>
            </Navbar.Item>

          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="Login" position="end" >
              <div class="buttons" >
                <a
                  class=" button is-primary" ><strong>Sign-Up</strong>
                </a>
              </div>
            </Navbar.Item>
            <Navbar.Item href="Signup" position="end" >
              <div class="buttons">
                <a
                  class="button is-danger"><strong>Login</strong>
                </a>
              </div>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>


    )
  }
};
export default TheBar;
<<<<<<< HEAD
=======

{/* <aside class="menu">
      <img src={slam} />

      <p class="menu-label">Products</p>

      <a class="is-active">

        Pre-Made Templates</a>

      <ul class="menu-list">
        <li><NavLink to="/premade">Shirt</NavLink></li>
        <li><a>Mug</a></li>
      </ul>
      <p class="menu-label">
        Administration
    </p>
      
    </aside> */}
>>>>>>> final-project-pulled-code

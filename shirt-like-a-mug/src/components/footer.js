import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Columns, Section, Container, Footer, Hero } from 'react-bulma-components/full'
import 'bulma/css/bulma.css'




class Contact extends Component {
  render() {
    return (
      <Columns>
        <Columns.Column>
          <Hero color="warning">
            <Section>
              <Container>



                <div class="content">
                  <h2 class="contactUs">Contact Us</h2>
                  <label class="label">Name</label>

                  <input class="input" type="text" placeholder="e.g Alex Smith" />

                  <label class="label">Email</label>

                  <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />

                  <label class="label">Tell us something</label>

                  <textarea class="textarea" placeholder="10 lines of textarea" rows="5">
                  </textarea>
                  {/*  */}
                </div>



              </Container>
            </Section>
          </Hero>
        </Columns.Column>
      </Columns>

    )
  }
};
export default Contact;


import React, { Component } from 'react';
import { Container, Message, Box, Section } from 'react-bulma-components/full';
import PicCarousel from "../components/carousel";
import TheBar from "../components/Navbar";
import Contact from "../components/footer";
// import Si from "../components/signIn";
import './home.css';






class Home extends Component {
 
  render() {
    return (
      <div>
        <TheBar />
        <PicCarousel />
        <Section>
          <Box>
            <Message size="medium">
              <Message.Header>
                Hello World!
          </Message.Header>
              <Message.Body>

                Welcome to Shirt like a Mug! 

            </Message.Body>
            </Message>
          </Box>
        </Section>
        <Contact />
</div>

    );
  }
};


export default Home;

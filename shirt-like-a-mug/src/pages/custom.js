import React, { Component } from 'react';
import DemoCarousel from "../components/carousel"
import TheBar from "../components/Navbar"
import Contact from "../components/footer"
import Si from "../components/signIn"
import './home.css';
import pictures from "../components/Images/pictures"
import "./home.css"
import { Card, Box, Media, Image, Content, Heading } from 'react-bulma-components/full'





class Custom extends Component {
    state = {
        photos: pictures
    }
    render() {
        console.log(this.state.photos);
        return (

            <div>
                <TheBar/>
                <div>
               <Box>
                   <Card>
                       <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png
http://bulma.io/images/placeholders/1280x960.png
" />
                       <Card.Content>
                           <Media>
                               <Media.Item renderAs="figure" position="left">
                                   <Image renderAs="p"  src={this.state.photos.photoOne.url}/>
                               </Media.Item>
                               <Media.Item>
                                   <Heading size={1}>John Smith</Heading>
                                   <Heading subtitle size={6}>
                                       @johnsmith
           </Heading>
                               </Media.Item>
                           </Media>
                           <Content>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
         <a href="#1">#css</a> <a href="#2">#responsive</a>
                               <br />
                               <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                           </Content>
                       </Card.Content>
                   </Card>

               </Box>
               <TheBar />
               <p>Premade</p>
               <Contact />

           </div>
      
            
            </div>

        );
    }
};


export default Custom;
{/* <img src={this.state.photos.photoOne.url}/>
            <img src={this.state.photos.photoTwo.url}/> */}
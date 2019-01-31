import React, { Component } from 'react';
import { Card, Box, Media, Content, Heading, Columns, Level, Section } from 'react-bulma-components/full';
import TheBar from "../components/Navbar";
import Contact from "../components/footer";
import { Carousel } from "react-responsive-carousel";
import './home.css';
import Pictures from "../components/images/pictures";
import pictures from '../components/images/pictures';
import Mongodb from "../mongodb";
import $ from 'jquery';
import axios from 'axios';


class Premade extends Component {
    state = {
        photos: pictures,
        Products:[]
    }
   componentDidMount(){
    axios.get("/all", function(data) {
        console.log(data)
        // // Call our function to generate a table body
        // displayResults(data);
      }).then(res=> {
        this.setState({ Products: res.data }).then(p => {
          console.log(JSON.stringify(this.state.Products))
        }); 
    })
//this.getDataFromDb();
   }
getDataFromDb = () => {
    fetch("http://localhost:3001/all")
      //.then(response => console.log(response)
      .then(res => this.setState({ Products: res.data }).then(p => {
        console.log(JSON.stringify(this.state.Products))
      }))
  };


    render() {
        console.log(this.state.photos)
        return (

            <div>
                <TheBar />
                <p>Premade</p>
                <Section>
                    <Heading><strong>Shirts</strong></Heading>
                    {/* <Carousel dynamicHeight stopOnHover showArrows={false} showThumbs={false} showIndicators={false}> */}
                    <Box>
                        <Columns>
                            <Columns.Column>
                                <Card>
                                    <Card.Image id="image" size="1x1" src={this.state.photos.photoOne.url} />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading id="item_name" size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>
                                                </Level>
                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>
                                                </Level>
                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>
                                                </Level>
                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>
                                                </Level>
                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>
                                                </Level>
                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                        </Columns>

                    </Box>
                    {/* </Carousel> */}
                </Section>
                <br />
                <Section>
                    <Heading><strong>Mugs</strong></Heading>
                    <Box>
                        <Columns>
                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>

                            <Columns.Column>
                                <Card>
                                    <Card.Image size="1x1" src="http://bulma.io/images/placeholders/1280x960.png" />
                                    <Card.Content>
                                        <Media>

                                            <Media.Item>
                                                <Heading size={4}>Shirt/Mug Product Name</Heading>
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            Brief description of the product or anything you want to say to add some personality..
                                    </Content>
                                        <br />
                                        <Media>
                                            <Media.Item>
                                                <Level>
                                                    <Level.Side align="right">
                                                        <Level.Item>
                                                            <a class="button is-info"> Add to Shopping Cart</a>
                                                        </Level.Item>
                                                    </Level.Side>

                                                </Level>

                                            </Media.Item>
                                        </Media>
                                    </Card.Content>
                                </Card>
                            </Columns.Column>
                        </Columns>


                    </Box>
                </Section>


                <Contact />

            </div >

        );
    }
};


export default Premade;
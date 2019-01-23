import { Link, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
;

class DemoCarousel extends Component {
    render() {
        return (

            <Carousel class="bigCarousel">


                <div class="red">
                    <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

                </div>
                <div class="blue">
                    <img src="https://s2.thcdn.com/productimg/600/600/11037907-9194343849920122.jpg" />

                </div>
                <div class="green">
                    <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
                </div>
                <div class="red">
                    <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

                </div>
                <div class="green">
                    <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
                    <p className="legend">Legend 3</p>
                </div>


            </Carousel>
        );
    }
}

export default DemoCarousel;
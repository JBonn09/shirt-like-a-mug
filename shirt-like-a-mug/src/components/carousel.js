import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Content, Columns, Section } from 'react-bulma-components/full';
import { Carousel } from 'react-responsive-carousel';



class PicCarousel extends Component {
    render() {
        return (
            <Container>
                <Columns is-vcentered centered={true} gapless={true}>
                    <Columns.Column size={8}>
                        <Carousel dynamicHeight infiniteLoop stopOnHover showArrows={false} showThumbs={false} showIndicators={false}>


                            <div class="pic1">
                                <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

                            </div>
                            <div class="pic2">
                                <img src="https://s2.thcdn.com/productimg/600/600/11037907-9194343849920122.jpg" />

                            </div>
                            <div class="pic3">
                                <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
                            </div>
                            <div class="pic4">
                                <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

                            </div>
                            <div class="pic5">
                                <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>


                        </Carousel>
                    </Columns.Column>
                </Columns>
            </Container>
        );
    }
}

export default PicCarousel;
{/* <Carousel dynamicHeight autoPlay infiniteLoop stopOnHover showArrows={false}>


<div class="pic1">
    <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

</div>
<div class="pic2">
    <img src="https://s2.thcdn.com/productimg/600/600/11037907-9194343849920122.jpg" />

</div>
<div class="pic3">
    <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
</div>
<div class="pic4">
    <img src="https://assets1.ignimgs.com/2018/10/10/majorasmaskanxiety-1280-1539207707636_1280w.jpg" />

</div>
<div class="pic5">
    <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2014/11/zelda-majoras-mask-3d-link-zora-deku-mask-artwork-3ds-official.jpg" />
    <p className="legend">Legend 3</p>
</div>


</Carousel> */}

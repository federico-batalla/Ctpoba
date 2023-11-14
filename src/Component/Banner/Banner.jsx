import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoEscuela from '../../imagenes/fotoEscuela.JPG' 
import fotoEscuela2 from '../../imagenes/fotoEscuela2.jpg';
import fotoEscuela3 from '../../imagenes/fotoEscuela3.jpg';

const Banner = () => {
    return (
      <div>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style= {{height:490}}
          className="d-block w-100"
          src= {fotoEscuela}
          alt="First slide"/>
        
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style= {{height:490}}
          className="d-block w-100"
          src= {fotoEscuela2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style= {{height:490}}
          className="d-block w-100"
          src= {fotoEscuela3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default Banner;
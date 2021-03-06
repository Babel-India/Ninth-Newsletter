import React from "react";
import {Container, Row, Carousel } from 'react-bootstrap';
import './Styles/Head.css'

const head = () => {
    return(
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi1.jpg").default }
      alt=""
    />
    <Carousel.Caption>
       <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sat srī akāl, Bonjour, Hallo, Hola Keywords Family Welcome to one and only Keywords News Platform!</p> 
    </Carousel.Caption>
  </Carousel.Item> 
   <Carousel.Item> 
     <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi2.jpg").default }
      alt="kwsbg"  ></img>
      <Carousel.Caption>
     <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ require("../Images/Head/bgi3.jpg").default }
      alt="kwsbg"
    />
    <Carousel.Caption>
    <h3 className="news-name" >Keywords India Scoop</h3>
      <p className="greetings" >Hello, Namaste, Sata srī akāla, Bonjour, Hallo, Hola Babel Family Welcome to one and only Babel News Platform!</p>
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
        </div>
    )
}

export default head;

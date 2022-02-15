import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import "./Styles/BSTC.css"
import video1 from "../Images/Videos/sushree.mp4";
import video2 from "../Images/Videos/Ayus.mp4"

function Video(){
    return(
        <div id="experts">
            <h1 className='video-head'>Art Attack</h1>
            <Container>
                <Col>
                   <video
                      classname = 'video'
                      src={video1} controls='controls'
                      width='30%'
                      height='10%'
                      autoPlay='false' />
                </Col>
                <hr />
                <Col>
                   <video
                      classname = 'video'
                      src={video2} controls='controls'
                      width='50%'
                      height='30%'
                      autoPlay='false' />
                </Col>
            </Container>
        </div>
    )
}
export default Video;



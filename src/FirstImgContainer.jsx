import React, { useState } from 'react'
import Image1 from './frst-background-banner.jpg'
import Image2 from './sec-background-banner.jpg'
import Image3 from './third-background-banner.jpg'
import leftArrow from './left-arrow.jpg'
import rightArrow from './right-arrow.jpg'
import './firstcon.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import 'video-react/dist/video-react.css';
// import { Player } from 'video-react';

const CompFirst = ({ data }) => {

    return (
        <>
            {/* <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player> */}
            <div id="first-outer-container">
                <div id="spacing-con-box">
                    <Carousel showIndicators={false} showThumbs={true} autoPlay={true} transitionTime={1000} infiniteLoop={true}>
                        {data.map((item, index) => (
                            <div>
                                <img src={item.pic} />
                                <div class="on-picture-heading-box">
                                    <div class="toronto-box">
                                        <div class="toronto-box-inner">
                                            <span>{item.divtext1}
                                                <em>{item.divtext2}</em>
                                            </span>
                                            <h2> {item.firstH2}
                                                <br />
                                                {item.secH2}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            //  <CompFirst key={index} data={item} />
                        ))}
                    </Carousel>
                </div>

            </div>
        </>
    );
};

const FirstImgContainer = () => {
    const images = [{
        pic: Image1,
        divtext1: "Toronto, ",
        divtext2: "Canada",
        firstH2: "HURRY!",
        secH2: "GET THE BEST VILLA FOR YOU"
    }, {
        pic: Image2,
        divtext1: "Melbourne, ",
        divtext2: "Australia",
        firstH2: "BE QUICK!",
        secH2: "GET THE BEST VILLA IN TOWN"
    }, {
        pic: Image3,
        divtext1: "Miami, ",
        divtext2: "South FLorida",
        firstH2: "ACT NOW!",
        secH2: "GET THE HIGHEST LEVEL PENTHOUSE"
    }];

    return (
        <div id="first-outer-container">
            <CompFirst data={images} />
        </div>
    )
}
export default FirstImgContainer;
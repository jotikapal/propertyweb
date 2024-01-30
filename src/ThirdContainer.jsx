import React, { useState } from 'react'
import './thirdcon.css'
import backgroundImg from './third-background-img.jpg'
// import upperImg from './third-con-video-frame.jpg'
// import videoIcon from './vidoe-icon.jpg'
import video from './video(2160p).mp4'
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';

const ThirdContainer = () => {
    return (
        <div id="third-outer-box">
            <div id="spacing-container-1">
                <div className="video-view-outer">
                    <div className="video-view-iner">
                        <h6>| VIDEO VIEW</h6>
                        <h2>Get Closer View & Different Feeling</h2>
                    </div>
                </div>
                <div className="background-img-con">
                    <img src={backgroundImg} alt="Background" />
                </div>
                {/* <div className="upper-image">
                    <Player playsInline>
                        <source src={video} />
                    </Player>
                </div> */}
            </div>
        </div>
    );
}
export default ThirdContainer;
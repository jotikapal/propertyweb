import React, { useState } from 'react'
import './fourthcon.css'

const FourthContainer = () => {
    return(
        <div id='outer-container'>
            <div id="spacing-container">
                <div class="first-con common">
                    <div class="building-34-box common-dif-box">
                        <h2>34</h2>
                        <p>Buildings <br /> Finished Now</p>
                    </div>
                    <div class="clr-container"></div>
                </div>

                <div class="second-con common">
                    <div class="experience-12 common-dif-box">
                        <h2>12</h2>
                        <p>Years <br /> Experience</p>
                    </div>
                    <div class="clr-container"></div>
                </div>

                <div class="third-con common">
                    <div class="awwards-24 common-dif-box">
                        <h2>24</h2>
                        <p>Awwards <br /> Won 2023</p>
                    </div>
                    <div class="clr-container"></div>
                </div>
            </div>
        </div>
    );
}
export default FourthContainer;
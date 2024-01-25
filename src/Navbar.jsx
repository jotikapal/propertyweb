import React, { useState } from 'react'
import scheduleImg from './schedule-icon.jpg'
import './navigationbar.css'

const Navbar = () => {
    return (
        <div id="navigation-bar" >
            <div id="spacing-navbar-container">
                <div id="nav-logo-text">
                    <span> VILLA </span>
                </div>

                <div id="nav-properties">
                    <ul class="navbar-prop-list-item">
                        <li class="common-class-of-list-item">Home</li>
                        <li class="common-class-of-list-item">Properties</li>
                        <li class="common-class-of-list-item">Property Details</li>
                        <li class="common-class-of-list-item">Contact Us</li>
                        <li class="common-class-of-list-item schedule-box">
                            <img class="nav-schedule-img" src={scheduleImg} />
                            <span>Schedule a Visit</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
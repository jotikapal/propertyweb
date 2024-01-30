import React, { useState } from 'react'
import scheduleImg from './schedule-icon.jpg'
import './navigationbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div id="navigation-bar" >
            <div id="spacing-navbar-container">
                <div id="nav-logo-text">
                    <span> VILLA </span>
                </div>

                <div id="nav-properties">
                    <ul class="navbar-prop-list-item">
                        <li class="common-class-of-list-item">
                            <Link to='secondContainer' smooth={true} duration={600}>Home</Link></li>
                        <li class="common-class-of-list-item">
                            <Link to='fifthContainer' smooth={true} duration={600}>Properties</Link></li>
                        <li class="common-class-of-list-item">
                            <Link to='sixthContainer' smooth={true} duration={600}>Property Details</Link></li>
                        <li class="common-class-of-list-item">
                            <Link to='seventhContainer' smooth={true} duration={600}>Contact Us</Link></li>
                        <li class="common-class-of-list-item schedule-box">
                            <Link to='seventhContainer' smooth={true} duration={600} >
                                <img class="nav-schedule-img" src={scheduleImg} />
                                <span>Schedule a Visit</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
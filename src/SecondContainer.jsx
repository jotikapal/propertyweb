import React, { useState } from "react";
import image from './featured seccon.jpg'
import icon from './featured-icon.png'
import spaceIcon from './flat-space-icon-01.png'
import contractIcon from './contract-icon-02.png'
import paytmentIcon from './payment-icon-03.png'
import safetyIcon from './safety-icon-04.png'
import './seccontainer.css'

const SecondContainer = () => {
    const [isClick1, setIsClick1] = useState(false);
    const [isClick2, setIsClick2] = useState(false);
    const [isClick3, setIsClick3] = useState(false);

    const toggleText1 = () => {
        setIsClick1(!isClick1);
        setIsClick2(false)
        setIsClick3(false)
    }
    const toggleText2 = () => {
        setIsClick2(!isClick2);
        setIsClick1(false)
        setIsClick3(false)

    }
    const toggleText3 = () => {
        setIsClick3(!isClick3);
        setIsClick2(false)
        setIsClick1(false)
    };
    return (
        <div id="Sec-outer-container">
            <div id="Spacing-sec-container">
                <div id="left-image-box">
                    <div className="img-con">
                        <img src={image} />
                        <div className="featured-icon-style"><img src={icon} id="small-image-icon" /></div>
                    </div>
                </div>
                <div id="featured-text-box">
                    <div className="featured-headings-part">
                        <span className="featured-style"><b>|FEATURED</b></span>
                        <h1>Best Appartment & Sea View</h1>
                    </div>
                    <div className="featured-text-part">
                        <button className="toggle-text" type="button" onClick={toggleText1}>Best useful Links ?</button>
                        {isClick1 ?
                            <div className="useful-links-text common-text-box">
                                <p>Get <b> the best villa </b> website template in HTML CSS and Bootstrap for your business.
                                    TemplateMo provides you the
                                    <a href="google.com"> best free CSS templates </a>
                                    in the world. Please tell your friends about it.</p>
                            </div> : null
                        }
                        <button className="toggle-text" type="button" onClick={toggleText2}>How does this work ?</button>
                        {isClick2 ?
                            <div className="how-work-text common-text-box">
                                <p>Dolor <b>almesit amet</b>, consectetur adipiscing elit,
                                    sed doesn't eiusmod tempor incididunt ut labore consectetur <code> adipiscing </code> elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> : null
                        }
                        <button className="toggle-text" type="button" onClick={toggleText3}>Why is Villa Agency the best ?</button>
                        {isClick3 ?
                            <div className="villa-agency-text common-text-box">
                                <p>Dolor <b>almesit amet</b>, consectetur adipiscing elit,
                                    sed doesn't eiusmod tempor incididunt ut labore consectetur
                                    <code> adipiscing </code>
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> : null
                        }
                    </div>
                </div>
                <div id="flat-feature-icons-box">
                    <ul>
                        <li>
                            <img src={spaceIcon} />
                            <div className="icon-names">
                                <h4>250 m2</h4> 
                                <span>Total Flat Space</span>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <img src={contractIcon} />
                            <div className="icon-names">
                                <h4>Contract</h4>
                                <span>Contract Ready</span>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <img src={paytmentIcon} />
                            <div className="icon-names">
                                <h4>Payment</h4>
                                <span>Payment Process</span>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <img src={safetyIcon} />
                            <div className="icon-names">
                                <h4>Safety</h4>
                                <span>24/7 Under Control</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default SecondContainer;
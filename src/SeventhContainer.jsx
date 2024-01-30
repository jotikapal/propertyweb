import React, { useState } from 'react'
import backgroundImage from './contact-bg.jpg'
import phoneicon from './phone-icon.png'
import mailicon from './email-icon.png'
import './seventhcon.css'

const SeventhContainer = () => {
    return (
        <section id="seventhContainer">
            <div id="outer-cont">
                <div id="spacing-cont">
                    <div class="heading-container-uppr">
                        <div class="heading-container-inner">
                            <h6>| CONTACT US</h6>
                            <h2>Get In Touch With Our Agents</h2>
                        </div>
                    </div>
                    <div class="bck-img-box">
                        <img src={backgroundImage} />
                    </div>
                    <div class="map-userdetails-con">
                        <div class="left-box">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61360.75976939652!2d-80.118781!3d25.952478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1697714399353!5m2!1sen!2sth" width="95%" height="500" style={{ border: 0, borderRadius: '12px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="phone-mail-box">
                                <div class="phone-box com-mail-contact">
                                    <div class="inner-com-mail-contact">
                                        <img src={phoneicon} />
                                        <h6>
                                            010-020-0340
                                            <br />
                                            <span> Phone Number </span>
                                        </h6>
                                    </div>
                                </div>
                                <div class="mail-box com-mail-contact">
                                    <div class="sec-innr inner-com-mail-contact">
                                        <img src={mailicon} />
                                        <h6>
                                            info@villa.co
                                            <br />
                                            <span>Business Email</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-box">
                            <form id="contact-form">
                                <div class="user-input-box">
                                    <div class="name-input common-field-div">
                                        <label for="name">Full Name</label>
                                        <input type="name" name="name" placeholder="Your Name..." autoComplete='on' required />
                                    </div>
                                    <div class="email-input common-field-div">
                                        <label for="email">Email Address</label>
                                        <input type="text" name="email" placeholder="Your E-mail..." pattern="[^ @]*@[^ @]*" autoComplete='on' required />
                                    </div>
                                    <div class="sub-input common-field-div">
                                        <label for="subject">Subject</label>
                                        <input type="subject" name="subject" placeholder="Subject..." autoComplete='on' />
                                    </div>
                                    <div class="mess-input common-field-div">
                                        <label for="subject">Subject</label>
                                        <textarea type="subject" name="subject" placeholder="Subject..." autoComplete='on' />
                                    </div>
                                    <div class="send-btn">
                                        <fieldset>
                                            <button type='submit' class="btn-class">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default SeventhContainer;
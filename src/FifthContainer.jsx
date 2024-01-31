import React, { useState } from 'react'
import appartImg from './appartment.jpg'
import villaImg from './villa.jpg'
import penthouseImg from './penthouse.jpg'
import scheduleImg from './schedule-icon.jpg'
import './fifthcon.css'
import { Link } from 'react-scroll'

const ComponentBlock = ({ value }) => {
    return (
        <div id="lower-con">
            <div class="appartment-con">
                <div class="house-specifications">
                    <div class="inner-con-house-speci">
                        <div class="inner-con-speci">
                            <ul>
                                <li>
                                    Total Flat Space
                                    <span>{value.space}</span>
                                </li>
                                <li>
                                    Floor number
                                    <span>{value.floorNo}</span>
                                </li>
                                <li>
                                    Number of rooms
                                    <span>{value.roomsNo}</span>
                                </li>
                                <li>
                                    Parking Available
                                    <span>{value.parking}</span>
                                </li>
                                <li>
                                    Payment Process
                                    <span>{value.payment}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="image-con">
                        <img src={value.pic} />
                    </div>
                    <div class="property-text-info">
                        <h4>{value.heading}</h4>
                        <p>{value.para}
                            <br />
                            <br />
                            {value.para2}
                        </p>
                        <div class="schedule-icon">
                            <Link to='seventhContainer' smooth={true} duration={600}>
                                <img class="schedule-img" src={scheduleImg} />
                                <span class="schedule-icon-text">Schedule a Visit</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ComponentBlock2 = ({ values }) => {
    return (
        <>
            {values.map((item, index) => (
                <ComponentBlock key={index} value={item} />
            ))
            }
        </>
    )
}

const FifthContainer = () => {
    const data = [{
        space: "185 m2",
        floorNo: "26th",
        roomsNo: "4",
        parking: "Yes",
        payment: "Bank",
        pic: appartImg,
        heading: "Extra Info About Property",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc."
    }, {
        space: "250 m2",
        floorNo: "26th",
        roomsNo: "5",
        parking: "Yes",
        payment: "Bank",
        pic: villaImg,
        propInfo: "Detail Info About Villa",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    }, {
        space: "320 m2",
        floorNo: "34th",
        roomsNo: "6",
        parking: "Yes",
        payment: "Bank",
        pic: penthouseImg,
        propInfo: "Extra Info About Penthouse",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    }]

    const [selectedProperty, setSelectedProperty] = useState("Appartment");
    const filteredData = data.filter(item => item.pic === (selectedProperty === "Appartment" ? appartImg : selectedProperty === "Villa House" ? villaImg : penthouseImg));

    return (
        <section id="fifthContainer">
            <div id="fif-outer-box">
                <div id="fif-spacing-con">
                    <div id="upper-box">
                        <div class="heading-box">
                            <h6>| BEST DEAL</h6>
                            <h2>Find Your Best Deal Right Now!</h2>
                        </div>
                        <div class="houses-nav-buttons">

                            <button
                                className={`common-btn ${selectedProperty === "Appartment" ? "selected" : ""}`}
                                onClick={() => setSelectedProperty("Appartment")}
                                type='button'
                            >Appartment</button>
                            <button
                                className={`common-btn ${selectedProperty === "Villa House" ? "selected" : ""}`}
                                onClick={() => setSelectedProperty("Villa House")}
                                type='button'
                            >
                                Villa House
                            </button>
                            <button
                                className={`common-btn ${selectedProperty === "Penthouse" ? "selected" : ""}`}
                                onClick={() => setSelectedProperty("Penthouse")}
                                type='button'
                            >
                                Penthouse
                            </button>
                            {/* <button class="appartment-btn common-btn" type='button'>Appartment</button>
                        <button class="villa-btn common-btn" type='button'>Villa House</button>
                        <button class="penthouse-btn common-btn" type='button'>Penthouse</button> */}
                        </div>
                    </div>
                    <ComponentBlock2 values={filteredData} />
                </div>
            </div>
        </section>
    )
}
export default FifthContainer;
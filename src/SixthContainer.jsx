import React, { useState } from 'react';
import './sixthcon.css';
import New18Img from './18New.jpg';
import Mid54Img from './54mid.jpg';
import Old26Img from './26Old.jpg';
import New12Img from './12New.jpg';
import Beach34Img from './34Beach.jpg';
import New22Img from './22new.jpg';

const Component = ({ value }) => {
    return (
        <>
       
            <div class="properties-overview">
                <div class="properties-inner-con">
                    <div class="img-con">
                        <a href="">
                            <img src={value.image} />
                        </a>
                    </div>
                    <div class="prop-details">
                        <span class="category">{value.category}</span>
                        <h6>{value.price}</h6>
                        <h4>
                            <a href="">{value.address}</a>
                        </h4>
                        <ul>
                            <li>Bedrooms:
                                <span>{value.bedrooms}</span>
                            </li>
                            <li>Bathrooms:
                                <span>{value.bathrooms}</span>
                            </li>
                            <li>Area:
                                <span>{value.area}</span>
                            </li>
                            <li>Floor:
                                <span>{value.floor}</span>
                            </li>
                            <li>Parking:
                                <span>{value.parking}</span>
                            </li>
                        </ul>
                        <div class="schedule-box">
                            <a href="">Schedule a visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Component2 = ({ values }) => {
    return (
        <>
            <div class="houses-boxes">{values.map((item, index) => (
                <Component key={index} value={item} />
            ))
            }
            </div>
        </>
    )
}

const SixthContainer = () => {
    const data = [{
        image: New18Img,
        category: "Luxury Villa",
        price: "$2.264.000",
        address: "18 New Street Miami, OR 97219",
        bedrooms: "8",
        bathrooms: "8",
        area: "545m2",
        floor: "3",
        parking: "6 spots"
    },
    {
        image: Mid54Img,
        category: "Luxury Villa",
        price: "$1.180.000",
        address: "54 Mid Street Florida, OR 27001",
        bedrooms: "6",
        bathrooms: "5",
        area: "450m2",
        floor: "3",
        parking: "8 spots"
    },
    {
        image: Old26Img,
        category: "Luxury Villa",
        price: "$1.460.000",
        address: "26 Old Street Miami, OR 38540",
        bedrooms: "5",
        bathrooms: "4",
        area: "225m2",
        floor: "3",
        parking: "10 spots"
    },
    {
        image: New12Img,
        category: "Apartment",
        price: "$584.500",
        address: "12 New Street Miami, OR 12650",
        bedrooms: "4",
        bathrooms: "3",
        area: "125m2",
        floor: "25th",
        parking: "2 cars"
    },
    {
        image: Beach34Img,
        category: "Penthouse",
        price: "$925.600",
        address: "34 Beach Street Miami, OR 42680",
        bedrooms: "4",
        bathrooms: "4",
        area: "180m2",
        floor: "38th",
        parking: "2 cars"
    },
    {
        image: New22Img,
        category: "Modern Condo",
        price: "$450.000",
        address: "22 New Street Portland, OR 16540",
        bedrooms: "3",
        bathrooms: "2",
        area: "165m2",
        floor: "26th",
        parking: "3 cars"
    },
    ]
    return (
        <section id="sixthContainer">
        <div id="outer-box">
            <div id="spacing-con">
                <div class="heading-con">
                    <div class="heading-inr-con">
                        <h6>| PROPERTIES</h6>
                        <h2>We Provide The Best Property You Like</h2>
                    </div>
                </div>
                <Component2 values={data} />
            </div>
        </div>
        </section>
    );
};
export default SixthContainer;
import React from 'react'

import { FaLocationArrow, FaEnvelope, FaMobileAlt } from "react-icons/fa"

import Payment from "./../../Assets/payments.png"

import "./Footer.scss"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempore nemo corporis saepe quia qui nesciunt voluptatum neque. Officia, ipsa.</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Kothputli Rd,Punnamada, Azitpanesar, Southpur, Kerala, 600088</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9817576248</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: jangra0001@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smartwatches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Ravi Jangra @ Copyright</div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer

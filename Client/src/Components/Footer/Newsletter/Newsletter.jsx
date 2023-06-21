import React from 'react'
import "./Newsletter.scss"

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"


const Newsletter = () => {
    return (
        <section className='newsletter' >
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="large-text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="email" placeholder='Email Address' />
                    <button>Subscribe</button>
                </div>
                <span className='text'>Will be used in accordance with our privacy policy</span>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={15} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={15} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={15} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={15} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter

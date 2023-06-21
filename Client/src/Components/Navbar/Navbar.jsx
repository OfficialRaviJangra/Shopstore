import React, { useContext, useEffect, useState } from 'react'
import "./navbar.scss"
import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"
import { Outlet, useNavigate } from 'react-router-dom'
import Cart from "../Cart/Cart"
import Search from './Search/Search'
import { Context } from '../../utils/Context'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()
    const { cartCount } = useContext(Context)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 120) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <>
            <nav className={`snavbar ${scrolled ? "sticky-nav" : ""}`}>
                <div className="snav-content">
                    <div className="logo" onClick={() => { navigate("/") }}>Shopstore</div>
                    <div className="middle">
                        <ul>
                            <li onClick={() => { navigate("/") }}>Home</li>
                            <li>About</li>
                            <li>Categories</li>
                        </ul>
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className='cart' onClick={() => { setShowCart(true) }}><CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </nav>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}

            <Outlet />
        </>
    )
}

export default Navbar

import React, { useContext } from 'react'

import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"

import Cartitem from './CartItem/Cartitem'

import "./Cart.scss"
import { Context } from '../../utils/Context'
import { useNavigate } from 'react-router-dom'


const Cart = ({ setShowCart }) => {
    const { cartItems, subtotal } = useContext(Context);
    const navigate = useNavigate()
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className='heading'>Shopping Cart</span>
                    <span className='close-btn' onClick={() => { setShowCart(false) }}><MdClose /><span className="text">close</span></span>
                </div>
                {cartItems.length === 0 && <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart</span>
                    <button className='return-btn' onClick={() => { navigate("/") }}>Return to shop</button>
                </div>}

                <>
                    <Cartitem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="total">&#8377;{subtotal}</span>
                        </div>
                        <div className="button">
                            <button className='checkout'> Checkout</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Cart

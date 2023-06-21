import React, { useContext } from 'react';
import "./Cartitem.scss";
import { MdClose } from "react-icons/md"
// import prod from "../../../Assets/products/speaker-prod-3.webp"
import { Context } from '../../../utils/Context';

const Cartitem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context)
    return (
        <div className='cart-products'>
            {cartItems.map((item) => {
                return <div className="cart-product" key={item.id}>
                    <div className="product-img">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <div className="prod-name">{item.attributes.title}</div>
                        <MdClose className='close-btn' onClick={() => { handleRemoveFromCart(item) }} />
                        <div className="quantity-btn">
                            <span onClick={() => { handleCartProductQuantity("dec", item) }}>-</span>
                            <span >{item.attributes.quantity}</span>
                            <span onClick={() => { handleCartProductQuantity("inc", item) }}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className='highlight'>&#8377;{item.attributes.price}</span>
                        </div>


                    </div>
                </div>
            })}

        </div>
    )
}

export default Cartitem

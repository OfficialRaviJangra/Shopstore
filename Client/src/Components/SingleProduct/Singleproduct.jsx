import React, { useContext, useState } from 'react'

import "./Singleproduct.scss"

import Relatedproducts from "./RelatedProducts/Relatedproducts"

import { BsFillCartPlusFill } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa"
import { useParams } from 'react-router-dom'
import useFetch from "../../Hooks/useFetch"
import { Context } from '../../utils/Context'


const Singleproduct = () => {
    const [count, setCount] = useState(1)
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context)
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    console.log(data)

    if (!data) return
    const product = data.data[0].attributes;

    return (
        <div className='single-product'>
            <div className="layout">
                <div className="single-product-container">
                    <div className="product-img">

                        <img src={process.env.REACT_APP_DEV_URL + product.image.data[0].attributes.url} alt="" />
                    </div>
                    <div className="product-details">
                        <div className="product-title">{product.title}</div>
                        <div className='product-price'>&#8377; {product.price}/-</div>
                        <div className="product-text">{product.description}</div>
                        <div className="add-btns">
                            <div className="add-btn">
                                <span onClick={() => { count === 1 ? setCount(count) : setCount(count - 1) }}>-</span>
                                <span >{count}</span>
                                <span onClick={() => { setCount(count + 1) }}>+</span>
                            </div>
                            <button className='add-to-cart' onClick={() => { handleAddToCart(data.data[0], count); setCount(1) }}><span><BsFillCartPlusFill size={20} /></span>add to Cart</button>
                        </div>
                        <div className="share-box">
                            <div className="share-box-cat"><b>Category:</b><span>{product.categories.data[0].attributes.title}</span></div>
                            <div className="share-box-icons">
                                <b>Share:</b>
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterestP size={16} />
                            </div>
                        </div>
                    </div>
                </div>
                <Relatedproducts productID={id} categoryID={product.categories.data[0].id} />
            </div>
        </div>
    )
}
export default Singleproduct;

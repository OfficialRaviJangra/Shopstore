import React from 'react'

import "./Product.scss"
import { useNavigate } from 'react-router-dom'

const Product = ({ id, data }) => {
    const navigate = useNavigate()
    return (
        <div className='card' key={id} onClick={() => navigate(`/product/${id}`)}>
            <div className="card-img">
                <img src={process.env.REACT_APP_DEV_URL + data.image.data[0].attributes.url} alt="" />
                {/* <img src={img} alt="" /> */}
            </div>
            <div className="product-detail">
                <span className="title">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>

        </div>
    )
}

export default Product

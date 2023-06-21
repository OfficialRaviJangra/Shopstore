import React from 'react';
import { useNavigate } from "react-router-dom"


import "./Category.scss"

const Category = ({ categories }) => {
    const navigate = useNavigate()
    return (

        <section className='categories'>
            <div className="cat-content">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => { navigate(`/category/${item.id}`) }}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                ))}
                {/* <div className="category">
                    <img src={cat1} alt="" />
                </div> */}
            </div>

        </section>
    )
}

export default Category

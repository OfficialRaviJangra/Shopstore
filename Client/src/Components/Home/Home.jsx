import React, { useEffect, useContext } from 'react'
import "./Home.scss"

import headphone from "../../Assets/Images/banner-headphone.png"
import Category from './Category/Category'
import Products from '../Products/Products'

import { fetchData } from "../../utils/api"
import { Context } from '../../utils/Context'


const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context)

    useEffect(() => {
        getcategory()
        getproducts()
    }, [])

    const getcategory = async () => {
        fetchData("/api/categories?populate=*").then(((res) => {
            setCategories(res)
        }))
    }
    const getproducts = async () => {
        fetchData("/api/products?populate=*").then((res => {
            setProducts(res)
        }))
    }

    return (
        <>
            <section className='banner'>
                <div className="headphone">
                    <img src={headphone} alt="" />
                </div>
                <div className="banner-content">
                    <div className="banner-text">
                        <h1>Sale is live</h1>
                        <h2>60% OFF </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, neque ab dignissimos unde provident non inventore sequi recusandae doloribus quisquam.</p>
                    </div>
                    <div className="banner-btns">
                        <button className="btn-1" id='btn'>Shop Now</button>
                        <button className="btn-2" id='btn'>Read More</button>
                    </div>
                </div>
            </section>

            <div className="category-content">
                <Category categories={categories} />
                <Products headingText="Popular Products" products={products} />
            </div>
        </>
    )
}

export default Home

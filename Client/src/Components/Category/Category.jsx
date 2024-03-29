import React from 'react'
import Products from '../Products/Products'
import useFetch from '../../Hooks/useFetch'
import "./Catergory.scss"
import { useParams } from 'react-router-dom'

const Category = () => {
    const { id } = useParams();

    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    console.log(data)


    return (
        <div className='category-main-content'>
            <div className="layout">
                <div className="category-title">{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}</div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    )
}

export default Category

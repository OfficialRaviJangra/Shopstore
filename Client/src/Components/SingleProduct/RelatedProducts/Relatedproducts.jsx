import React from 'react'

import Products from "../../Products/Products"
import "./Relatedproducts.scss"
import useFetch from '../../../Hooks/useFetch'
const Relatedproducts = ({ productID, categoryID }) => {

    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productID}&filters[categories][id]=${categoryID}&pagination[start]=0&pagination[limit]=4`)
    console.log("this is related data")
    console.log(data)
    return (
        <div className='related-products'>
            <Products headingText="Related Products" products={data} />
        </div>
    )
}

export default Relatedproducts

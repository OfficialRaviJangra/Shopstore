import React, { useState } from 'react'
import { MdClose } from "react-icons/md"
import "./Search.scss"
import { useNavigate } from 'react-router-dom'
import useFetch from "../../../Hooks/useFetch"

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    console.log(data)
    if (!query.length) {
        data = null
    }
    return (
        <div className='search'>
            <div className="form-field">
                <input type="text" autoFocus placeholder='Search for products' onChange={onChange} value={query} />
                <MdClose onClick={() => { setShowSearch(false) }} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map((item) => {
                        return <div className="search-item"
                            key={item.id}
                            onClick={() => { navigate(`/product/${item.id} `); setShowSearch(false) }}

                        >
                            <div className="img-container">
                                <img src={process.env.REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt="" />
                            </div>
                            <div className="prod-details">
                                <span className="name">{item.attributes.title}</span>
                                <span className="desc">{item.attributes.description}</span>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Search;

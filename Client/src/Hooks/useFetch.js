import { fetchData } from "../utils/api"
import { useState, useEffect } from "react"



const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeapicall()
    }, [endpoint])

    const makeapicall = async () => {
        const res = await fetchData(endpoint)
        setData(res)
    }

    return { data };
}

export default useFetch;
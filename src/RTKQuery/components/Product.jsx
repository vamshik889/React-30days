import React, { useState } from 'react'
import { useGetProductByIdQuery } from '../app/service/data'

const Product = () => {
    const [id,setId] = useState(1)
    const {data,isError,isLoading} = useGetProductByIdQuery(id)

    const handleRandom = ()=>{
        let res = Math.ceil(Math.random()*100)
        console.log(res)
        setId(res)
    }
    console.log(data)

    if(isLoading){
        return <h5>Loading...</h5>
    }
  return (
    <div>
        <p>{id}</p>
        {
            data && <h4> { ` Product id : ${id} - ${data.title}`}</h4>
        }
        <button onClick={handleRandom}>Random product</button>
    </div>
  )
}

export default Product
import React from 'react'
import { useGetAllProductsQuery } from '../app/service/data'


const AllProducts = () => {
  const {isError, isLoading,data} = useGetAllProductsQuery();

  if(isLoading) {return <h1>Loading...</h1>}
  if(isError){return <h1>Something went wrong</h1>}
  console.log(data)
  return (
    <div>
    {
      data && data?.products?.length>0?data?.products.map((item)=>{
        return <li key={item.id}>{item.title}</li>
      }) :"No Data "
    }
    
    </div>
  )
}

export default AllProducts
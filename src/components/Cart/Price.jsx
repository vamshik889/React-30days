import React, { useEffect, useState } from 'react'

const Price = ({qty,price}) => {
    const [pricetrack,setPricetrack] = useState(price);
    useEffect(()=>{
        //caculatePrice();
        setPricetrack(qty*price)
        
    },[qty]);

  return (
    <div>
        <p className='itemQtyPrice'>{`Total:${pricetrack}`}</p>
    </div>
  )
}

export default Price
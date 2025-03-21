import React, { useEffect, useState } from 'react'

const Total = ({items}) => {
    console.log(items);
    const [total,setTotal] = useState(() =>
        items.reduce((acc, cur) => acc + cur.price, 0))

    useEffect(()=>{
        setTotal(
            items.reduce((acc,cur)=>{
                return acc+cur.price;
            },0)
        )
    },[items]);
    console.log(total)
  return (
    <div>
        <h3>{`Total of all items: ${total}`}</h3>
    </div>
  )
}

export default Total
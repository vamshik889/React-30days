import React from 'react'

const Item = ({id,name,cuisine,image,rating,reviewCount,handleAddToCart}) => {
  return (
    <div style={{textAlign:"center",margin:"5px"}}>
    
    <div style={{maxHeight:"600px",border:"1px solid black"}}> 
        
        <img src={image} alt={name} style={{height:"300px",width:"300px"}}/>
        <h5>{name}</h5>
        <p>Cuisine : {cuisine}</p>
        <p>Rating: {rating} ({reviewCount} reviews)</p>
    </div>
    <button style={{marginTop:"5px"}} onClick={()=>handleAddToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default Item
import React from 'react'

const ObjectasProps = (props) => {
    console.log(props);
    const {name,age,skills} = props;
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <h1>{name}</h1>   
        <p>{age}</p>
        <ul>
            {
                skills.map((skill,ind)=><li key={ind}>{skill}</li>)
            }
        </ul>

    </div>
  )
}

export default ObjectasProps
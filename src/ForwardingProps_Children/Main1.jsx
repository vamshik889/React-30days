import React from 'react'
import Forward from './Forward'

const Main1 = () => {
  return (
    <div>
        <Forward name="name1" placeholder="placeholder1" text={true} />
        <Forward name="name2" placeholder="placeholder2" text={false}/>
        
    </div>
  )
}

export default Main1
import React from 'react'
import styles from "./inputWithItems.module.css";

const Pill = ({image,text,onClick}) => {
  return (
    <span className={styles.user} onClick={onClick}>
        <img src={image} alt={text} style={{height:"25px"}} />
        <span>{text} &times;</span>

    </span>
  )
}

export default Pill
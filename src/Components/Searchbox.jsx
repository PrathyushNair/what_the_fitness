import React from 'react'
import styles from "../Styles/Searchbox.module.css"
export const Searchbox = () => {
  return (
    <div className={styles.maincontainer}>
        <span style={{color:"grey"}}><i class="fa-solid fa-magnifying-glass"></i></span>
        <input style={{backgroundColor:"#080808"}} placeholder='Search Gym name here...'></input>
        <div className={styles.inputRight}>
            <div className={styles.loc}><i class="fa-solid fa-location-dot"></i></div>
            <div className={styles.loc}>Clear</div>
        </div>
        
    </div>
  )
}

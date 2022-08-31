import axios from "axios";
import React from "react";
import styles from "../Styles/Filter.module.css";
export const Filter = ({gymList,setgymList}) => {
    let handleChange=(e)=>{
        console.log(e.target.value)
        axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${e.target.value}`)
        .then((resp)=>{
            console.log(resp.data.data)
            if(resp.data.data===undefined)
            {
                setgymList([])
            }
            else{
                 setgymList(resp.data.data)
            }
           
        })
    }
  return (
    <div className={styles.filterMain}>
      <p style={{ fontSize: "25px" }}>Filters</p>
      <div>
        <p>Location</p>
        <div style={{ display: "flex", width: "50%" }}>
          <span className={styles.locationLogo}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className={styles.filterInput}
            placeholder="Enter Location"
          ></input>
        </div>
      </div>
      <div>
        <p>Price</p>
        <div style={{ display: "flex", width: "50%", gap: "10px" }}>
          <input className={styles.filterpriceInput} placeholder="Min"></input>
          <input className={styles.filterpriceInput} placeholder="Max"></input>
        </div>
      </div>
      <div>
        <p>Cities</p>
        <select
          style={{ outline: "none" }}
          className={styles.selectStyle}
          placeholder="Select city"
          onChange={(e)=>handleChange(e)}
        >
          <option value="Select City"></option>
          <option value="" disabled selected hidden>
            Select city
          </option>
          <option value="New Delhi">New Delhi</option>
          <option value="Gaziabad">Gaziabad</option>
          <option value="Greater Noida">Greater Noida</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
    </div>
  );
};

import React from "react";
import axios from "axios";
import styles from "../Styles/Gymlist.module.css";
export const Gymlist = ({gymList,setgymList}) => {
 
  
  React.useEffect(() => {
    axios
      .get(
        " https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      )
      .then((resp) => {
        console.log(resp.data.data);
        setgymList(resp.data.data);
      });
  }, []);
  return (
    <div className={styles.mainList}>
      {gymList.map((el) => (
        <div className={styles.mapDiv}>
          <div className={styles.rightBox}>
            <div>
              <p style={{ textAlign: "left" }}>{el.gym_name}</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <span>{el.address1}</span>,<span>{el.address2}</span>
            </div>
            <div style={{ textAlign: "left" }}>
              <span>{el.duration_text} away | </span>
              <span>{el.distance_text}</span>
            </div>
            <div className={styles.booknowDiv}>Book now</div>
          </div>
        </div>
      ))}
    </div>
  );
};

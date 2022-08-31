import React from "react";
import styles from "../Styles/Fitnessexp.module.css";
export const Fitnessexp = () => {
  return (
    <div className={styles.fitnessContainer}>
      <div style={{ width: "20%", fontSize: "45px", fontWeight: "700",textAlign:"center"}}>
        WTF Fitness Experience?
        <div style={{ display: "flex",width:"90%",margin:"auto",gap:"10px"}}>
          <div
            style={{ height: "150px", width: "15%", backgroundColor: "#cb3838" }}
          ></div>
          <div style={{ width: "70%", fontSize: "30px",fontWeight:"200" }}>
            @ your regular gym cost?
          </div>
        </div>
      </div>
      <div className={styles.fitnessDiv}>
        <div>Modern Equipments</div>
        <div>Skilled Trainer</div>
        <div>Top class ambience</div>
        <div>Sanitized GYMS</div>
      </div>
    </div>
  );
};

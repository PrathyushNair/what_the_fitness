import React from "react";
import styles from "../Styles/Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <img src="https://i.postimg.cc/F79s3DjZ/logo.png"></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              listStyle: "none",
              border: "1px solid white",
            }}
          >
            <p>Quick Links</p>
            <li>About</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>WTF in News</li>
            <li>Terms and condition</li>
            <li>Refund & cancellation</li>
          </ul>
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              listStyle: "none",
              border: "1px solid white",
            }}
          >
            <p>Explore</p>
            <li>Arenas</li>
            <li>Studios</li>
            <li>Nutrition</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

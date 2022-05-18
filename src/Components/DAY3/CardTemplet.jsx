import React from "react";
import styles from "./paymentCard.module.css";

const CardTemplet = ({
  date,
  logo,
  heading,
  subheading,
  device,
  bgcolor,
  id,
}) => {
  return (
    <div className={styles.cont} style={{ backgroundColor: bgcolor }}>
      <div className={styles.topDiv}>
        <p>{date}</p>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <button className={styles.btn}>Case Study</button>
      <h1 className={styles.text}>{heading}</h1>
      <h1 className={styles.text}>{subheading}</h1>
      <h2 className={styles.text}>{device}</h2>
    </div>
  );
};

export default CardTemplet;

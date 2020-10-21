import React from "react";

import styles from "./input_styles.module.css";

const Input = ({ handleChange, label, name, value }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Input;

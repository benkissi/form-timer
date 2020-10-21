import React from "react";

import styles from "./input_styles.module.css";

const Input = ({ handleChange, label, name, value, disabled }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input disabled={disabled} id={name} name={name} value={value} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Input;

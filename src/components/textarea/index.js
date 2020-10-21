import React from 'react'

import styles from './textarea_styles.module.css'

const TextArea = ({handleChange, label, name, value, disabled}) => {
    return (
        <div className={styles.wrapper}>
        <label htmlFor={name}>{label}</label>
        <textarea disabled={disabled} id={name} name={name} value={value} onChange={(e) => handleChange(e)}/>
        </div>
    )
}

export default TextArea
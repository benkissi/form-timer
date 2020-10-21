import React from 'react'

import styles from './button_styles.module.css'

const Button = ({handleClick, text}) => {
    return (
        <button className={styles.button} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button
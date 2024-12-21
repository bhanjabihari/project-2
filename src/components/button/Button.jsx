import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <button className={props.isOutLine ? styles.outer_btn : styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button

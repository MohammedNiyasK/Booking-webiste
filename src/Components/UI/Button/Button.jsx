import React, { Fragment } from 'react'
import classes from './Button.module.css'

const Button = () => {
  return (
    <Fragment>
        <button className={classes.btn}>
            Discover More
        </button>
    </Fragment>
  )
}

export default Button
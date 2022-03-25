import React from 'react';
import { useTranslate } from 'react-admin';
import { makeStyles } from '../helpers';
import MuiButton from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    marginRight: 5
  }
})

const Button = ({variant="contained", color="primary", label="label", ...rest}) => {

  const translate = useTranslate()
  const classes = useStyles()

  return (
    <MuiButton color={color} variant={variant} {...rest} className={classes.root}>{translate(label)}</MuiButton>
  )

}

export default Button

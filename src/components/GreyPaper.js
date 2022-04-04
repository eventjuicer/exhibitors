import React from 'react'
import { grey, makeStyles } from '../helpers'
import { Paper } from '.'

const useStyles = ({maxWidth, padding, marginBottom}) => makeStyles({

    root: {
      maxWidth: maxWidth || 400,
      padding: padding || 10,
      backgroundColor: grey[300],
      marginBottom: marginBottom || 20
    }
  });
  

const GreyPaper = ({children, ...rest}) => {
    const classes = useStyles(rest)()
    return (
        <Paper className={classes.root}>{children}</Paper>
    )
}

export default GreyPaper
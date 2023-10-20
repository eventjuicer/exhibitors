

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import {useTranslate} from 'react-admin'
import Markdown from './Markdown';
import { isString } from '../helpers';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
 function CustomAlert({type="warning", label, translationParams={}, children=null, action=null, titleLabel=null }) {
    const classes = useStyles();
    const translate = useTranslate()

    return (
   
        <Alert severity={type} action={action}>
        {titleLabel && <AlertTitle>{translate(titleLabel)}</AlertTitle>}
        <Markdown label={label}>{isString(children)? children: null}</Markdown>
        {!isString(children)? children: null}
        </Alert>
      
    );
  }


  export default CustomAlert


/***
 * 
 * 
 
<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>
<Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  This is a warning alert — <strong>check it out!</strong>
</Alert>
<Alert severity="info">
  <AlertTitle>Info</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
</Alert>
<Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>


 */
import React from 'react';
import {useTranslate} from 'react-admin'
import Typography from '@material-ui/core/Typography'


const DefaultTypography = ({children, pre="", post="", label=null, labelProps={}, ...rest}) => {
  const translate = useTranslate()
  const translated = label ? translate(label, labelProps) : children
  return <Typography {...rest} gutterBottom>{pre}{translated}{post}</Typography>
}


export default DefaultTypography
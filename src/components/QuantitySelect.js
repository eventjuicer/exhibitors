import React from 'react'
import { useTranslate } from 'react-admin';
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select'; 
import InputLabel from '@material-ui/core/InputLabel'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem'; 
import {isNumber, isFunction, isArray, isObject} from 'lodash'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



  const QuantitySelect = ({label='common.quantity', defaultValue="", translateChoices=false, postfix="common.pcs", choices=[], onChange}) => {
    
    const translate = useTranslate()
    const classes = useStyles()
    const [value, setValue] = React.useState(defaultValue)

    const handleChange = (event) => {
        const value = event.target.value
        setValue(value);
        if(isFunction(onChange)){
            onChange(value)
        }
    }
    
    return (<FormControl variant="outlined" className={classes.formControl}>
    <InputLabel id="demo-simple-select-outlined-label">{translate(label)}</InputLabel>
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={value}
      onChange={handleChange}
      label={translate(label)}
    >
      {/* <MenuItem value="">
        <em>{translate("common.none")}</em>
      </MenuItem> */}
        {choices.map((item) => {
            if(isNumber(item)){
                return <MenuItem key={item} value={item}>{item} {postfix ? translate(postfix): ""}</MenuItem>
            }
            if(isArray(item) && item.length===2){
                return <MenuItem key={item[0]} value={item[0]}>{translateChoices ? translate(item[1]): item[1]}</MenuItem>
            }
            if(isObject(item)){
                return <MenuItem key={item.value} value={item.value}>{translateChoices ? translate(item.label) : item.label}</MenuItem>
            }
        })}
    </Select>
  </FormControl>
  )

}

export default QuantitySelect


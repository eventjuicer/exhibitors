import React from 'react';

import {
  TextInput,
  CheckboxGroupInput,
  RadioButtonGroupInput,
  FileInput,
  FileField
} from 'react-admin'

import {makeStyles} from '@material-ui/core/styles'

// import Dropzone from 'react-dropzone'
import RaEditor from '../../components/MarkdownEditor'


const useStyles = makeStyles(theme=>({
  error : {
    color: 'rgb(244, 67, 54)',
    fontSize : 12,
    lineHeight : '12px'
  },
}))

const buildChoices = (choices, resource, prefix) => {

  return choices.map(choice => ({
    "id" : choice,
    "name" : `resources.${resource}.fields.${prefix}_choices.${choice}`
  }))

}

const FieldError = ({valid, invalid, error}) => {
  const classes = useStyles()
  return !valid ? <p className={classes.error}>{error}</p> : null;
}

const VarTextInput = ({markdown, longtexts, radios, checkboxes, uploads, ...props}) => {

  const {record:{name}, resource} = props;

  if(uploads.includes(name)){
  
     return <FileInput accept="image/*,.pdf" multiple={false} {...props}><FileField source="value" title="title" /></FileInput>
  
  }

  if(markdown.includes(name)){
    return  <RaEditor {...props}   />   

  }

  if(name in radios){
      return <RadioButtonGroupInput {...props} choices={ buildChoices(radios[name], resource, name) } />
  }

  if(name in checkboxes){
    return (<div>
      <CheckboxGroupInput {...props} choices={ buildChoices(checkboxes[name], resource, name) }/>
      <FieldError { ...props.meta } />
    </div>)
  }

  return (
    <TextInput multiline={false} {...props}  />
  )
}


export default VarTextInput
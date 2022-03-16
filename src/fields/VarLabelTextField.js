import React from 'react';
import {useTranslate} from 'react-admin'
import {Typography} from '../components'

const VarLabelTextField = ({raw, source, resource, record, baseLabel="customfields", style={}, translateKey="name", ...rest}) => {

  const translate = useTranslate()

  const label = `resources.${resource}.${baseLabel}.${record[source]}.${translateKey}`

  if(raw){
    return translate(label)
  }

  return (<Typography variant="h5" label={label}/>)
 
}


export default VarLabelTextField

import React from 'react';
import { DeleteButton } from 'react-admin';

const StatusAwareDeleteButton = (props) => {

  if(!props.record ){
    return null
  }

  const {sent_at} = props.record

  if(sent_at){
    return null
  }
  
  return <DeleteButton {...props} />

}

export default StatusAwareDeleteButton

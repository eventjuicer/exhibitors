import React from 'react';
import Icon from '@material-ui/icons/InsertInvitation';
import { ButtonLink } from '../../../components';
import { useLimit } from '../../../contexts';

const InviteButton = ({
  basePath = '',
  record = {},
  resource,

}) => {

  const limit = useLimit("meetups")

  if(!record){
    return null
  }

  return (<ButtonLink 
    to="/meetups/create" 
    query={{
      participant_id: record.id
    }} 
    label="resources.visitors.actions.invite" 
    startIcon={<Icon />} 
    variant="outlined"
    disabled={limit <= 0}
  />)

}



export default InviteButton

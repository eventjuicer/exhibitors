import React from 'react';

import Approved from '@material-ui/icons/ThumbUp';
import Rejected from '@material-ui/icons/ThumbDown';
import TimerIcon from '@material-ui/icons/Timer';

const StatusField = ({record={}}) => {

  if(!record){
    return null
  }


  if(record.agreed){
    return <Approved />
  }

  if(record.responded_at && !record.agreed){
    return <Rejected />
  }

  return <TimerIcon />


};

export default StatusField;

import React from 'react';

import Approved from '@material-ui/icons/ThumbUp';
import Rejected from '@material-ui/icons/ThumbDown';
import Waiting from '@material-ui/icons/HourglassEmpty';

import { status } from './status';

const Scheduled = Waiting;


const StatusField = props => {
  const intStatus = status(props.record);

  if (intStatus > 0) {
    if (intStatus === 2) {
      return <Scheduled color="blue" />;
    }

    return <Approved color="blue" />;
  } else {
    if (intStatus === -2) {
      return <Rejected />;
    }
  }

  return <Waiting />;
};

export default StatusField;

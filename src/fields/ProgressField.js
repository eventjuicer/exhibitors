import React from 'react';
import get from 'lodash/get';

const ProgressField = ({ record = {}, current, target, size = 25 }) => {
  return (
    <span>
      {get(record, current, 0)} / {get(record, target)}
    </span>
  );
};
 

export default ProgressField;

import React from 'react';
import get from 'lodash/get';

const FullNameField = ({ record = {}, source, size = 25 }) => {
  const _source = source ? `${source}.` : '';
  return (
    <span>
      {get(record, _source + 'fname')} {get(record, _source + 'lname')}
    </span>
  );
};



export default FullNameField;

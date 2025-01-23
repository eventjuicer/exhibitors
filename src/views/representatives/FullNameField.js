import React from 'react';
import { useRecordContext } from 'react-admin';

const FullNameField = (props) => {
    const record = useRecordContext();
    if (!record) return null;
    
    return (
        <span>
            {record.profile.fname} {record.profile.lname}
        </span>
    );
};

FullNameField.defaultProps = {
    label: 'fields.name'
};

export default FullNameField; 
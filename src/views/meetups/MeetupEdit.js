import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  required,
  minLength,
  maxLength
} from 'react-admin';

import FullNameField from '../../fields/FullNameField';
//import { getUserFullName, getUserData } from '../../helpers';

const ViewEdit = props => (
  <Edit title="resources.meetups.fields.participant.profile.title" {...props}>
    <SimpleForm submitOnEnter={false}>
      <FullNameField source="admin.profile" label="Creator" />

      <TextField
        source="message"
        validate={[required(), minLength(3), maxLength(255)] }
        style={{ maxWidth: 544 }}
      />

      <TextInput multiline minRows={10} source="comment" style={{ minWidth: 500, maxWidth: 700 }} />

      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
      <TextField source="participant.profile.position" />

    </SimpleForm>
  </Edit>
);

export default ViewEdit;

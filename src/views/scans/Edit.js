import React from 'react';
import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

import { validate } from './validation';

const ViewCreate = props => (
  <Edit title="hej" {...props}>
    <SimpleForm submitOnEnter={false} validate={validate}>
      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
      <TextField source="participant.profile.position" />

      <TextInput multiline source="comment" style={{ maxWidth: 544 }} />
    </SimpleForm>
  </Edit>
);

export default ViewCreate;

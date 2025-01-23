import React from 'react';
import {
  required,
  email,
  minLength,
  number,
  maxLength,
  SelectInput
} from 'react-admin';

import { TextInput } from '../../fields';

const fields = [

    <TextInput
    key="fname"
    source="profile.fname"
    validate={ [required(), minLength(2), maxLength(255)] }

  />,

  <TextInput
    key="lname"
    source="profile.lname"
    validate={ [required(), minLength(2), maxLength(255)] }

  />,

  <TextInput
    key="position"
    source="profile.position"
    validate={ [required(), minLength(2), maxLength(255)] }

  />,

  <TextInput
  key="email"
  type="email"
  source="profile.email"
  label="fields.email"
  validate={ [required(), email()] }

/>,

  <TextInput
    key="phone"
    source="profile.phone"
    validate={ [required(), number(),  minLength(8), maxLength(20)] }
  
  />,

  <SelectInput
    key="hidden"
    source="profile.unsubscribed"
    label="Keep me hidden"
    helperText="By selecting 'Keep Me Hidden', your personal information will be removed from the attendee list, and neither you nor others will be able to connect through the matchmaking tool."
    choices={[
        { id: 0, name: 'No, show me.' },
        { id: 1, name: 'Yes, hide me.' }
    ]}
    defaultValue={0}
  />

]

export default fields
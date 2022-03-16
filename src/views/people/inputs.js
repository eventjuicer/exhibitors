

import React from 'react';
import {
  RadioButtonGroupInput,
  required,
  email,
  minLength,
  choices,
  number,
  maxLength
} from 'react-admin';

import roles from './roles'
import { TextInput } from '../../fields';

const inputs = [

    <TextInput
    key="fname"
    source="fname"
    label="fields.fname"
    validate={ [required(), minLength(2), maxLength(255)] }

  />,

  <TextInput
    key="lname"
    source="lname"
    label="fields.lname"
    validate={ [required(), minLength(2), maxLength(255)] }

  />,

  <TextInput
    key="phone"
    source="phone"
    label="fields.phone"
    validate={ [required(), number(),  minLength(8), maxLength(20)] }

  />,

  <TextInput
    key="email"
    type="email"
    source="email"
    label="fields.email"
    validate={ [required(), email()] }
 
  />,

  <RadioButtonGroupInput
    key="role"
    source="role"
    choices={roles}
    label="resources.people.fields.role"
    validate={[required(), choices( roles.map(item => item.id) )]}
  />

]

export default inputs
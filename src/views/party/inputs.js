

import React from 'react';
import {
  required,
  email,
  minLength,
  number,
  maxLength
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





]


export default fields
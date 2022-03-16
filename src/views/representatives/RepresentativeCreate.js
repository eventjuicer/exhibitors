import React from 'react';
import {
  Create,
  SimpleForm
} from 'react-admin';

import inputs from './inputs'

const RepresentativeCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list" submitOnEnter={false}>
      {inputs}
    </SimpleForm>
  </Create>
);

export default RepresentativeCreate;

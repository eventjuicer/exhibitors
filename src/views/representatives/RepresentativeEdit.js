import React from 'react';
import {
  Edit,
  SimpleForm,
} from 'react-admin';

import inputs from './inputs'


const RepresentativeEdit = props => (

  <Edit  {...props}>
    <SimpleForm submitOnEnter={false}>
    {inputs}
    </SimpleForm>
  </Edit>
);

export default RepresentativeEdit;

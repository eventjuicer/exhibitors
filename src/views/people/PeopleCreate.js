import React from 'react';
import {
  Create,
  SimpleForm,
} from 'react-admin';
import inputs from './inputs'

const ViewCreate = props => (
  
  <Create {...props}>

    <SimpleForm redirect="list" submitOnEnter={false}>

    {inputs}
   
    </SimpleForm>
  </Create>
);

export default ViewCreate;

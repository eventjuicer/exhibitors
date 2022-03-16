import React from 'react';

import {

  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput


 } from 'react-admin';

import {validate as validateContact} from "./validation";

import { Title } from './Shared';


const ViewEdit = props => (
  <Edit title={<Title />} {...props}>

    <SimpleForm
      redirect="list"
      submitOnEnter={false}
       validate={validateContact}
      >

      <TextInput
        source="data.fname"
        style={{ display: 'inline-block' }}
      />

      <TextInput
        source="data.lname"
        style={{ display: 'inline-block', marginLeft: 32 }}
      />

      <TextInput
        type="email"
        source="email"
        validation={{ email: true }}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="data.phone"
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <ReferenceArrayInput source="contactlist_ids" reference="contactlists" allowEmpty>
         <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>

   <TextInput
          multiline
          source="comment"
          style={{ maxWidth: 544 }}
        />
    </SimpleForm>
  </Edit>
);

export default ViewEdit;

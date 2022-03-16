import React from 'react';
import {
  Create,
  TabbedForm,
  FormTab,
  TextInput
} from 'react-admin';

const ViewCreate = props => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="resources.visitors.tabs.invitation">
        <TextInput source="name" />

        <TextInput
          source="data.sender_name"
          label="pos.sros"
          style={{ display: 'inline-block' }}
        />
        <TextInput
          type="email"
          source="data.sender_email"
          validation={{ email: true }}
          style={{ display: 'inline-block', marginLeft: 32 }}
        />

        <TextInput
         multiline
         label="resources.newsletters.inputs.template"
          source="data.template"
          style={{ maxWidth: 544 }}
        />
      </FormTab>
    </TabbedForm>
  </Create>
);

export default ViewCreate;

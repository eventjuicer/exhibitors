import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput
} from 'react-admin';

import FullNameField from '../../fields/FullNameField';

const ViewTitle = ({ record }) =>
  record ? <FullNameField record={record} size={32} /> : null;

const ViewEdit = props => (
  <Edit title={<ViewTitle />} {...props}>
    <TabbedForm>
      <FormTab label="resources.visitors.tabs.invitation">
        <TextInput source="name" />

        <TextInput
          source="data.sender_name"
          style={{ display: 'inline-block' }}
        />
        <TextInput
          type="email"
          source="data.sender_email"
          validation={{ email: true }}
          style={{ display: 'inline-block', marginLeft: 32 }}
        />

        <TextInput multiline source="data.template" style={{ maxWidth: 544 }} />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ViewEdit;

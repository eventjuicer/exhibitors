import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput
} from 'react-admin';
import Icon from '@material-ui/icons/Person';

import { Title } from './Shared';

export const InviteIcon = Icon;

const ViewEdit = props => (
  <Edit title={<Title />} {...props}>
    <TabbedForm>
      <FormTab label="resources.visitors.tabs.invitation">
        <TextInput source="first_name" style={{ display: 'inline-block' }} />
        <TextInput
          source="last_name"
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
          multiline
          label="resources.visitors.tabs.message"
          source="invitation"
          style={{ maxWidth: 544 }}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ViewEdit;

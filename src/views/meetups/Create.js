import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  email,
  minLength,
} from 'react-admin';

import get from 'lodash/get';
import qs from 'query-string';

import { validate, basicValidation, basicValidationEmail } from './validation';
import { getUserFullName, getUserData } from '../../helpers';



const ViewCreate = props => (
  <Create title="aor.page.meeting_request" {...props}>
    <SimpleForm redirect="list" submitOnEnter={false} validate={validate}>
      <NumberInput
        disabled={true}
        source="participant_id"
        initialValue={get(qs.parse(props.location.search), 'participant_id', 0)}
      />

      <TextInput
        multiline
        source="message"
        validate={[basicValidation]}
        style={{ maxWidth: 700 }}
        initialValue={getUserData('company.profile.invitation_template')}
      />

      <TextInput
        source="data.from_name"
        validate={[basicValidation]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
        initialValue={getUserFullName()}
      />

      <TextInput
        type="email"
        source="data.from_email"
        validate={[basicValidationEmail]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
        initialValue={getUserData('email')}
      />
    </SimpleForm>
  </Create>
);

export default ViewCreate;

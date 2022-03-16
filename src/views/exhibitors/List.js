import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  DeleteButton
} from 'react-admin';

import withLogin from '../withLogin';

import { ResourceTitle } from '../../components';
const ViewList = props => (

<List
    {...props}
    perPage={100}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.position"  sortable={false} />
      <TextField source="profile.phone"  sortable={false} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
</List>
);

export default withLogin(ViewList);

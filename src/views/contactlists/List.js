import React from 'react';
import {
  Datagrid,
  Filter,
  List,
  TextInput,
  TextField,
  NumberField,
} from 'react-admin';

import FullNameField from '../../fields/FullNameField';

import { ResourceTitle } from '../../components';

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="name" sortable={false} />
      <NumberField source="submitted" sortable={false} />
      <NumberField source="imported" sortable={false} />
      <TextField source="created_at" sortable={false} />
      <FullNameField source="admin.profile" sortable={false} />
    </Datagrid>
  </List>
);

export default ViewList;

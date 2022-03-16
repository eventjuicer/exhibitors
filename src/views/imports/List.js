import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

//import ListActions from './ListActions';
import FullNameField from '../../fields/FullNameField';
import ProgressField from '../../fields/ProgressField';

import { ResourceTitle } from '../../components';

const ViewList = props => (
  <List
    {...props}
    //  actions={<ListActions />}
    perPage={200}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="created_at" sortable={false} />
      <TextField source="name" sortable={false} />
      <TextField source="contactlist" sortable={false} />
      <ProgressField
        label="Imported"
        current="imported"
        target="submitted"
        sortable={false}
      />
      <FullNameField source="created_by" sortable={false} />
    </Datagrid>
  </List>
);

export default ViewList;

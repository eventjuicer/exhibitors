import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  TextField,
  //  TextInput,
  SelectInput
} from 'react-admin';

import ListActions from './ListActions';
import { ResourceTitle } from '../../components';

const ViewFilter = props => (
  <Filter {...props}>
       {/* <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput
      source="status"
      allowEmpty
      choices={[
        { id: 'agreed', name: 'resources.scans.status.agreed' },
        { id: 'rejected', name: 'resources.scans.status.rejected' },
        { id: 'scheduled', name: 'resources.scans.status.scheduled' }
      ]}
    />
  </Filter>
);

const ViewList = props => (
  <div>
    <List
      {...props}
      actions={<ListActions />}
      filters={<ViewFilter />}
      //  sort={{ field: 'cname2', order: 'ASC' }}
      perPage={50}
      title={ <ResourceTitle {...props} />}
    >
      <Datagrid>
        <TextField
          source="profile.fname"
          sortable={false}
        />
        <TextField
          source="profile.lname"
          sortable={false}
        />
        <TextField
          source="profile.cname2"
          sortable={false}
        />
        <TextField
          source="profile.position"
          sortable={false}
        />

        <EditButton />
      </Datagrid>
    </List>
  </div>
);

export default ViewList;

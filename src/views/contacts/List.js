import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  EditButton,
  ReferenceArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';


import FullNameField from '../../fields/FullNameField';

import ListActions from './ListActions';

import { ResourceTitle } from '../../components';
// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (
  <List
    {...props}
    actions={<ListActions />}
    //  filters={<VisitorFilter />}
    //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="email" sortable={false} />

      <ReferenceArrayField
        reference="contactlists"
        source="contactlist_ids"
        sortable={false}
      >
        <SingleFieldList>
          <ChipField source="name"   />
        </SingleFieldList>
      </ReferenceArrayField>

      <TextField source="data.name" sortable={false} />
      <FullNameField source="data" sortable={false} />

      <TextField source="data.phone" sortable={false} />


      <TextField source="sent_at" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);

export default ViewList;

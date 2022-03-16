import React from 'react';
import {
  translate
  //  List,
  //  Datagrid,
  //  DateField,
  //  ShowButton,
  //  Filter,
  //  TextField,
  //  TextInput
} from 'react-admin';

import Creatives from './Creatives';

// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (
  <div className="list-page" style={{ marginTop: -25 }}>
    <Creatives />

    {/*

  <List
    {...props}
  //  filters={<VisitorFilter />}
  //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid>
      <TextField source="name" label="Name" />
      <TextField source="act_as" label="Type" />
      <DateField source="updated_at" label="Updated" />

      <ShowButton />

    </Datagrid>
  </List>

  */}
  </div>
);

export default translate(ViewList);

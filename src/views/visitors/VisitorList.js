import React from 'react';
import { List, Datagrid, Filter, TextField, TextInput } from 'react-admin';

import InviteButton from './components/InviteButton';
import { ResourceAbout, ResourceTitle } from '../../components';
//import Actions from './ListActions';

const filters = [
  <TextInput label="pos.search" source="q" alwaysOn />
]
  
   
const VisitorList = props => (
  <List
    {...props}
    filters={ filters }
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
    aside={ <ResourceAbout {...props} aside={true} />}
    title={ <ResourceTitle {...props} />}
    bulkActionButtons={false}
    exporter={false}
  >
    <Datagrid>

      <TextField source="profile.cname2" sortable={false} />
      <TextField source="profile.nip" sortable={false} />
      
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.position" sortable={false} />

    
      {/* <TextField source="profile.domain" sortable={false} /> */}

      <InviteButton />
    </Datagrid>
  </List>
);

export default VisitorList;

import React from 'react';
import { List, Datagrid, Filter, TextField, TextInput } from 'react-admin';

import InviteButton from './components/InviteButton';
import { ResourceAbout, ResourceTitle } from '../../components';
//import Actions from './ListActions';
import {LimitsContextProvider, useLimit} from '../../contexts'

const filters = [
  <TextInput label="pos.search" source="q" alwaysOn />
]
  
const Aside = (props) => {
  useLimit("meetups")
 
  return  <ResourceAbout {...props} aside={true} />

}
   
const VisitorList = props => (
  <LimitsContextProvider>
  <List
    {...props}
    filters={ filters }
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
    aside={ <Aside {...props} /> }
    title={ <ResourceTitle {...props} />}
    bulkActionButtons={false}
    exporter={false}
  >
    <Datagrid>

      <TextField source="domain" sortable={false} />
      <TextField source="profile.cname2" sortable={false} />
      <TextField source="profile.nip" sortable={false} />
      
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.position" sortable={false} />



      <InviteButton />
    </Datagrid>
  </List>
  </LimitsContextProvider>
);

export default VisitorList;

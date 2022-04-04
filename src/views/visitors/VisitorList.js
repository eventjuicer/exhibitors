import React from 'react';
import { List, Datagrid, TextField, TextInput } from 'react-admin';

import InviteButton from './components/InviteButton';
import { ResourceAbout, ResourceTitle } from '../../components';
//import Actions from './ListActions';
import {LimitsContextProvider, useLimit} from '../../contexts'
import VisitorListAside from './components/VisitorListAside';
import { LinkField } from '../../fields';

const filters = [
  <TextInput label="pos.search" source="q" alwaysOn />
]

   
const VisitorList = props => (
  <LimitsContextProvider>
  <List
    {...props}
    filters={ filters }
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
    aside={ <VisitorListAside {...props} /> }
    title={ <ResourceTitle {...props} />}
    bulkActionButtons={false}
    exporter={false}
  >
    <Datagrid>

      <LinkField source="domain" sortable={false} />
      <TextField source="profile.cname2" sortable={false} />
      <TextField label="fields.nip" source="profile.nip" sortable={false} />
      
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField label="fields.position" source="profile.position" sortable={false} />



      <InviteButton />
    </Datagrid>
  </List>
  </LimitsContextProvider>
);

export default VisitorList;

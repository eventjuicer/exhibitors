import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { ResourceTitle } from '../../components';
import {LimitsContextProvider, useLimit} from '../../contexts'
import { LinkField } from '../../fields';
import withLogin from '../withLogin';
import { 
  PersonField, 
  PositionField,
  CompanyField,
  InviteButton,
  VisitorListAside,
  filters
} from './components';




{/* <TextField label="fields.position" source="profile.position" sortable={false} /> */}

const VisitorList = props => (
  <LimitsContextProvider>
  <List
    {...props}
    filters={ filters }
    filterDefaultValues={{
      // participant_type: "retailer_wholesaler"
    }}
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
    title={ <ResourceTitle {...props} />}
    aside={ <VisitorListAside {...props} aside={ true }/> }
    empty={ <VisitorListAside {...props} aside={ false }/> }
    bulkActionButtons={false}
    exporter={false}
  >
    <Datagrid>
      <LinkField source="domain" sortable={false} />


      <CompanyField label="Company" sortable={false} />
   
      <PersonField label="Person"  sortable={false}/> 
      
      <PositionField label="Position"   sortable={false}/>

      <InviteButton />
    </Datagrid>
  </List>
  </LimitsContextProvider>
);

export default withLogin(VisitorList, <VisitorListAside aside={ false } />);

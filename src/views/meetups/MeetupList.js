import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  SelectInput,
  FilterButton,
  TopToolbar
} from 'react-admin';


import {
  P2CMeetupAcceptRejectButtons, 
  ContactDataField,
  RsvpTypeIcon,
  RejectMessageEdit
} from './components'

import _get from 'lodash/get'
import { ResourceAbout, ResourceTitle } from '../../components';
import { LimitsContextProvider, useLimit} from '../../contexts'
import { MeetupIcon } from '.';
import withLogin from '../withLogin';



const filters = [

  <SelectInput
  source="direction"
  allowEmpty
  choices={[
    { id: 'P2C', name: 'resources.meetups.fields.direction.p2c' },
    { id: 'C2P', name: 'resources.meetups.fields.direction.c2p' },
    { id: 'LTD', name: 'resources.meetups.fields.direction.ltd' },

  ]}
  alwaysOn
  
/>,


  <SelectInput
    source="status"
    allowEmpty
    choices={[
      { id: 'agreed', name: 'resources.meetups.fields.status.agreed' },
      { id: 'rejected', name: 'resources.meetups.fields.status.rejected' },
      // { id: 'scheduled', name: 'resources.meetups.fields.status.scheduled' }
    ]}
    alwaysOn
    
  />
]

const ListActions = (props) => (
  <TopToolbar>
      <FilterButton/>
  </TopToolbar>
  )




const Aside = (props) => <ResourceAbout {...props} showCreate={false} icon={MeetupIcon} pre={<RejectMessageEdit {...props} />} />


const MeetupList = props => (
  
  <LimitsContextProvider>
  <List
    {...props}
    actions={ <ListActions /> }
    filters={ filters }
    //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={50}
    title={ <ResourceTitle {...props} />}
    aside={ <Aside {...props} aside={true} /> }
    empty={  <Aside {...props} aside={false} /> }
    bulkActionButtons={false}
  >
    <Datagrid>

      <RsvpTypeIcon sortable={false} label="Typ" />
      <ContactDataField sortable={false}/>
    
      <P2CMeetupAcceptRejectButtons  label="Status" sortable={false} />

      <TextField source="comment" sortable={false} />
      <EditButton label="comment" />
      {/* <StatusAwareDeleteButton /> */}
    </Datagrid>
  </List>
  </LimitsContextProvider> 
);


export default withLogin(MeetupList, <Aside aside={false} /> )  

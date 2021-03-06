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

import StatusField from './components/StatusField';
import StatusAwareDeleteButton from './components/StatusAwareDeleteButton';
import _get from 'lodash/get'
import { ResourceAbout, ResourceTitle } from '../../components';
import {TextFieldShort} from '../../fields'
import {LimitsContextProvider, useLimit} from '../../contexts'
import { MeetupIcon } from '.';
import withLogin from '../withLogin';


const filters = [
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

/*
<h4 style={{}}>
  Below invitations are scheduled for sending and will be processed 2
  weeks before the event. Your limit is 5 invitations.
</h4>
*/
/*


"/meetups"
label : "resources.customers.fields.name"
record : {id: 14, creative_id: 4, agreed: 0, retries: 0, message: "", …}
resource : "meetups"
sortable : false
source : "participant.profile.fname"


*/
const FullNameField = ({resource, source, record }) => {

  return <span>{_get(record, `${source}.fname`)} {_get(record, `${source}.lname`)}</span>

}

FullNameField.defaultProps = {
  label: 'resources.meetups.fields.participant.name'
}


const Aside = (props) => <ResourceAbout {...props} icon={MeetupIcon}  />


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
  >
    <Datagrid>
      <FullNameField
        source="participant.profile"
        sortable={false}
      />
      <TextField
        source="participant.profile.cname2"
        sortable={false}
      />
      <TextField source="comment" sortable={false} />
      <StatusField label="status" sortable={false} />
      <EditButton />
      <StatusAwareDeleteButton />
    </Datagrid>
  </List>
  </LimitsContextProvider> 
);


export default withLogin(MeetupList, <Aside aside={false} /> )  

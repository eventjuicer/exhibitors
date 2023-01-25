import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField
} from 'react-admin';

import withLogin from '../withLogin';
import { ResourceAbout, ResourceTitle} from '../../components'
import { PartyIcon } from '.';

const Empty = (props) => (<ResourceAbout  icon={PartyIcon} resource="party" {...props} />)


export const RepresentativeList = (props) => (

<List
    {...props}
    perPage={100}
    aside={<Empty aside={true} />} 
    empty={<Empty />}
    bulkActionButtons={false}
    exporter={false}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="profile.fname"  label="fields.fname" sortable={false} />
      <TextField source="profile.lname"  label="fields.lname" sortable={false} />
      <TextField source="profile.position"  label="fields.position" sortable={false} />
      <EditButton />
    </Datagrid>
</List>
);

export default withLogin(RepresentativeList, <Empty />);

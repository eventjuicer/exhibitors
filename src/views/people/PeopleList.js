import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  SelectField
} from 'react-admin';

import withLogin from '../withLogin';
import { ResourceAbout, ResourceTitle } from '../../components';
import {PeopleIcon} from '.';
import roles from './roles'

const Empty = (props) => (<ResourceAbout  icon={PeopleIcon} descriptionLabel="logistics.timeline.items.people.description" resource="people" {...props} />)


const ViewList = props => (

<List
    {...props}
    perPage={100}
    exporter={false}
    empty={<Empty />}
    bulkActionButtons={false}
    aside={<Empty aside={true} />}
    title={ <ResourceTitle {...props} />}
  >
    <Datagrid>
      <TextField source="fname"  sortable={false} label="fields.fname" />
      <TextField source="lname"  sortable={false}  label="fields.lname" />
      <SelectField source="role" choices={roles} sortable={false}  label="resources.people.fields.role"  />
      <EditButton />
    </Datagrid>
</List>
);

export default withLogin(ViewList, <Empty />);

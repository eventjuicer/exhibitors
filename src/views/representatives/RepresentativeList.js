import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  BooleanField,
  useRecordContext
} from 'react-admin';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import withLogin from '../withLogin';
import { ResourceAbout, ResourceTitle} from '../../components'
import { RepresentativeIcon } from '.';
import FullNameField from './FullNameField';

const Empty = (props) => (<ResourceAbout  icon={RepresentativeIcon} descriptionLabel="logistics.timeline.items.reps.description"  resource="representatives" {...props} />)

const VisibilityField = () => {
    const record = useRecordContext();
    if (!record) return null;

    return record.profile.unsubscribed === 1 ? 
        <VisibilityOffIcon /> : 
        <VisibilityIcon />;
};

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
      <FullNameField sortable={false} />
      <TextField source="profile.position" label="fields.position" sortable={false} />
      <TextField source="profile.phone" label="fields.phone" sortable={false} />
      <VisibilityField source="profile.unsubscribed" label="Visibility" sortable={false} />
      <EditButton />
    </Datagrid>
</List>
);

export default withLogin(RepresentativeList, <Empty />);

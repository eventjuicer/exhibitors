import React from 'react';
import {
  List
} from 'react-admin';

import CustomIterator from '../upgrades/CustomIterator'
import withLogin from '../withLogin'
import Preview from '../upgrades/Preview';
import { ArrangementIcon } from '.';
import { ResourceAbout, ResourceTitle } from '../../components';

const Empty = (props) => (<ResourceAbout  icon={ArrangementIcon} descriptionLabel="logistics.timeline.items.arrangement.description" resource="arrangement" {...props} />)

const ViewList = props => (

<List
    {...props}
    perPage={100}
    exporter={false}
    empty={<Empty {...props} />}
    aside={<Empty {...props} aside />}
    title={ <ResourceTitle {...props} />}
  >
    <CustomIterator />

</List>
);

export default withLogin(ViewList, <Preview filter={(item)=>item.role=="service_external"} />);

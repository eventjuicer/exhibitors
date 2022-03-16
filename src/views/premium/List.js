import React from 'react';
import {
  List
} from 'react-admin';

import CustomIterator from '../upgrades/CustomIterator'
import withLogin from '../withLogin'
import Preview from '../upgrades/Preview';

import { ResourceTitle } from '../../components';

const ViewList = props => (

<List
    {...props}
    perPage={100}
    exporter={false}
    title={ <ResourceTitle {...props} />}
  >
    <CustomIterator />

</List>
);

export default withLogin(ViewList, <Preview filter={(item)=>item.featured} />);

import React from 'react';
import {
  List
} from 'react-admin';

import CustomIterator from './CustomIterator'
import withLogin from '../withLogin'
import Preview from './Preview';
import { ResourceTitle } from '../../components';


const UpgradeList = props => (
  <List
  {...props}
//  actions={<ListActions/>}
  perPage={100}
  exporter={false}
  title={ <ResourceTitle {...props} />}
>
  <CustomIterator />

</List>
)

export default withLogin(UpgradeList, <Preview />);

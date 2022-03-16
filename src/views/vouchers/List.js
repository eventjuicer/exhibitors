import React from 'react';
import {
  List
} from 'react-admin';

import CustomIterator from '../upgrades/CustomIterator'
import withLogin from '../withLogin'
import Preview from '../upgrades/Preview';
import { VoucherIcon } from '.';
import { ResourceAbout, ResourceTitle } from '../../components';

const Empty = (props) => (<ResourceAbout  icon={VoucherIcon}  descriptionLabel="logistics.timeline.items.vouchers.description"  resource="vouchers" {...props} />)


const ViewList = props => (

<List
    {...props}
    perPage={100}
    exporter={false}
    aside={ <Empty {...props} aside />}
    empty={ <Empty {...props} /> }
    title={ <ResourceTitle {...props} />}
  >
    <CustomIterator />

</List>
);

export default withLogin(ViewList, <Preview filter={(item)=>item.role=="service_internal" && !item.featured} />);

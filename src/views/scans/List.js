import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  TextField,
  //  TextInput,
  SelectInput
} from 'react-admin';

import ListActions from './ListActions';
import { ResourceTitle } from '../../components';
import { useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';

const ViewFilter = props => (
  <Filter {...props}>
       {/* <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput
      source="status"
      allowEmpty
      choices={[
        { id: 'agreed', name: 'resources.scans.status.agreed' },
        { id: 'rejected', name: 'resources.scans.status.rejected' },
        { id: 'scheduled', name: 'resources.scans.status.scheduled' }
      ]}
    />
  </Filter>
);




export default function ScanListMoved({basePath = ''}) {
  const translate = useTranslate()

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
    }}>
      <h2 style={{marginBottom: '20px'}}>{translate('resources.scans.wtf-happened-here.title')}</h2>
      <p>{translate('resources.scans.wtf-happened-here.description')} <Link to="/representatives">{translate('resources.scans.wtf-happened-here.link')}</Link></p>
      
      <div style={{ width: '70%', marginTop: '20px', paddingBottom: '100px'}}>
        <img 
          src={'/app_access.png'} 
          alt="visitors-moved" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  )
}




// const ViewList = props => (
//   <div>
//     <List
//       {...props}
//       actions={<ListActions />}
//       filters={<ViewFilter />}
//       //  sort={{ field: 'cname2', order: 'ASC' }}
//       perPage={50}
//       title={ <ResourceTitle {...props} />}
//     >
//       <Datagrid>
//         <TextField
//           source="profile.fname"
//           sortable={false}
//         />
//         <TextField
//           source="profile.lname"
//           sortable={false}
//         />
//         <TextField
//           source="profile.cname2"
//           sortable={false}
//         />
//         <TextField
//           source="profile.position"
//           sortable={false}
//         />

//         <EditButton />
//       </Datagrid>
//     </List>
//   </div>
// );

// export default ViewList;

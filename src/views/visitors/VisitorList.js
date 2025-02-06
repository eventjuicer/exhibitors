import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { ResourceTitle } from '../../components';
import {LimitsContextProvider, useLimit} from '../../contexts'
import { LinkField } from '../../fields';
import withLogin from '../withLogin';
import { 
  PersonField, 
  PositionField,
  CompanyField,
  InviteButton,
  VisitorListAside,
  filters
} from './components';
import {useTranslate} from 'react-admin';
import { Link } from 'react-router-dom';


{/* <TextField label="fields.position" source="profile.position" sortable={false} /> */}

export default function VisitorListMoved({basePath = ''}) {
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
      <h2 style={{marginBottom: '20px'}}>{translate('resources.visitors.wtf-happened-here.title')}</h2>
      <p>{translate('resources.visitors.wtf-happened-here.description')} <Link to="/representatives">{translate('resources.visitors.wtf-happened-here.link')}</Link></p>
      
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


const VisitorList = props => (
  <LimitsContextProvider>
  <List
    {...props}
    filters={ filters }
    filterDefaultValues={{
      // participant_type: "retailer_wholesaler"
    }}
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
    title={ <ResourceTitle {...props} />}
    aside={ <VisitorListAside {...props} aside={ true }/> }
    empty={ <VisitorListAside {...props} aside={ false }/> }
    bulkActionButtons={false}
    exporter={false}
  >
    <Datagrid>
      <LinkField source="domain" sortable={false} />


      <CompanyField label="Company" sortable={false} />
   
      <PersonField label="Person"  sortable={false}/> 
      
      <PositionField label="Position"   sortable={false}/>

      <InviteButton />
    </Datagrid>
  </List>
  </LimitsContextProvider>
);

// export default withLogin(VisitorList, <VisitorListAside aside={ false } />);

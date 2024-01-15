import React from 'react';
import {
  Create,
  SimpleForm,
  Link,
  useTranslate
} from 'react-admin';

import inputs from './inputs'
import { useCompanyDataItem } from '../../helpers';
import { isEmpty } from '../../helpers';
import { Alert, Box } from '../../components';


const RepresentativeCreate = props => {

  const name = useCompanyDataItem("name")
  const translate = useTranslate();

  if(isEmpty(name)){

    return (<Box m={4}><Alert titleLabel="errors.please_add_company_name">
        <Link to={{ pathname: '/companydata' }}>{translate('ra.action.edit')}</Link>
      </Alert></Box>)

  }

  return (
    <Create {...props}>
      <SimpleForm redirect="list" submitOnEnter={false}>
        {inputs}
      </SimpleForm>
    </Create>
  );

  
}
export default RepresentativeCreate;

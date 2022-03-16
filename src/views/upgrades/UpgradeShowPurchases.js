import React from 'react';

import {
  Datagrid,
  DateField,
  TextField,
  ReferenceManyField
} from 'react-admin';

// import ModifyPurchaseField from './components/__ModifyPurchaseField'
import PurchaseStatusField from './components/PurchaseStatusField'
import PurchaseTicketsField from './components/PurchaseTicketsField'
import { Typography, Box } from '../../components';


const Purchases = (props) => {


    const {record:{purchase_ids}} = props
      
    // if( isEmpty(purchase_ids) ){
    //   return null;
    // }
  
    return (
    <Box>
    <Typography label="resources.purchases.menu" />
    <ReferenceManyField {...props} label="Purchases" reference="purchases" target="ticket_id">
    <Datagrid>
      <DateField source="ts" label="Date" sortable={false} />
      <PurchaseTicketsField showItems={false} source="items" sortable={false} />
      {/* <TextField source="amount" sortable={false} /> */}
      <PurchaseStatusField source="status" sortable={false} />
      {/* <ModifyPurchaseField sortable={false} /> */}
    </Datagrid>
  </ReferenceManyField>
  </Box>
  )}


export default Purchases
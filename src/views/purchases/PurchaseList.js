
import React from 'react';
import {  List } from 'react-admin';
import withLogin from '../withLogin'
import PurchasesGroupByEvent from './PurchasesGroupByEvent'
import { ResourceTitle } from '../../components';
const PurchaseList = props => (

  <List {...props}  exporter={false}    title={ <ResourceTitle {...props} />} >
    <PurchasesGroupByEvent {...props} />
  </List>

);

export default withLogin(PurchaseList)
  





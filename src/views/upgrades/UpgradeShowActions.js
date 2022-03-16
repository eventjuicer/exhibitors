import React from 'react';
import {
  ListButton,
  TopToolbar
} from 'react-admin';

import BuyAction from '../../components/BuyAction'
import { TicketContext } from '../../contexts';

const Actions = ({ basePath, data, resource, ...rest }) => {


  return (
    <TicketContext basePath={basePath} record={data} resource={resource}>

      <TopToolbar>

      <BuyAction />

      <ListButton basePath={basePath} />


      </TopToolbar>
    </TicketContext>
    
  );


}

export default Actions

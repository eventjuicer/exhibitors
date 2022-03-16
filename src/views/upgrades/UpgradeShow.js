
import React from 'react';
import {
  Show,
  SimpleShowLayout,
} from 'react-admin';

import UpgradeShowTitle from './UpgradeShowTitle'
import UpgradeShowActions from './UpgradeShowActions';
import { TicketContext, useTicket } from '../../contexts';
import UpgradeShowPurchases from './UpgradeShowPurchases'

import {
  TicketPrice, 
  TicketImage,
  TicketDescription, 
  TicketAvailability, 
  TicketStatus,
  TicketName,
  Done,
  Grid,
  Box
} from '../../components';



const TicketImageWithBooked = () => {
  
  const {booked} = useTicket()
 
  return <div style={{position: 'relative'}}>
      <TicketImage />
      <Done show={booked} count={booked}/>
      </div>

}

const CustomShowField = (props) => {

  return (
    <>
     <TicketContext {...props}>
      
      <Grid container direction='row' spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Box m={2}>
            <TicketName />
            <Box mt={2} mb={5}>
            <Grid container spacing={2} alignItems="center">
              <Grid item> <TicketStatus /></Grid>
              <Grid item>  <TicketAvailability /></Grid>
              <Grid item> <TicketPrice /></Grid>
            </Grid>
            </Box>
          </Box>
          <TicketDescription />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TicketImageWithBooked />
        </Grid>
      </Grid>
  
      <UpgradeShowPurchases {...props}/>

      </TicketContext>
    </>
  )

}

const UpgradeShow = (props) => {

  return (<Show {...props} title={ <UpgradeShowTitle /> } actions={<UpgradeShowActions />}>
  <SimpleShowLayout>
  <CustomShowField />
  </SimpleShowLayout>
  </Show>)

}

export default UpgradeShow;

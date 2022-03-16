import React from 'react';
import {Card} from '@material-ui/core';
import {Timeline, Support, Grid, Box} from '../../components'
import {useSettings} from '../../contexts'
import { Title } from 'react-admin';


const InfoBox = () => (<Grid container>
  <Grid item> <Support /></Grid>
  <Grid item></Grid>
</Grid>)


 const Logistics = () => {

  const {items} = useSettings("logistics.timeline")
  return (
    <Card>
    <Title title="resources.logistics.menu" />
    <InfoBox />
    <Box mt={1}>
    <Timeline baseLabel="logistics.timeline." items={items} />
    </Box>
   </Card>
  );
}


export default Logistics
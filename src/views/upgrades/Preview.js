
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { TicketName } from '../../components'; 
import { TicketContext, useTicket } from '../../contexts';
import {useGet, resizeCloudinaryImage} from '../../helpers'
import { makeStyles } from '@material-ui/core/styles';
const useStyles =  makeStyles({
    image: {
      filter: 'url(#desaturate) grayscale(100%)'
    },
  });

const Ticket = () => {

    const {thumbnail} = useTicket()
    const classes = useStyles()

  return ( <Card elevation={0}>
   
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={resizeCloudinaryImage(thumbnail, 350, 350)}
        title=""
        className={classes.image}
      />
      <CardContent>
        <TicketName />
      </CardContent>
  </Card>)
}

const CustomIterator = ({basePath, endpoint="tickets", filter=(item)=>item.role== "service_external" || item.role == "service_internal"}) => {

    const {data, loading} = useGet(endpoint, true)
    const filtered = (data || []).filter(filter)

    return (
    <Box m={2}>
    <Grid container spacing={3}>{
      filtered.map(item => (<Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={1}><TicketContext record={ item } basePath={basePath}><Ticket /></TicketContext></Grid>))
    }</Grid>
    </Box>);
}



export default CustomIterator

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { 
  TicketStatus, 
  TicketPrice, 
  TicketAvailability, 
  TicketName, 
  Typography,
  Done
} from '../../components'; 
import { TicketContext, useTicket } from '../../contexts';
import {  ShowButton } from 'react-admin'
import { resizeCloudinaryImage, grey } from '../../helpers'
import TicketNameToIcon from '../purchases/components/TicketNameToIcon'

const useStyles = (props) => makeStyles(theme => ({

  container: {
    maxWidth: "80vw",
    [theme.breakpoints.up("lg")]: {
      // maxWidth: "60vw",
    },
  },
  root: {
    position: 'relative',
    // minWidth: 300
  },
  card: {
    minWidth: 280,
  },
  item: {
    filter: 'url(#desaturate) grayscale(100%)'
  },

  iconAsImageContainer: {
   height: 250
  },
  iconAsImage: {
    fontSize: 150,
    margin: 50,
    color: grey[700]
  }
}));



const CustomCardMedia = () => {

  const classes = useStyles({})()
  const {thumbnail, translation_asset_id, iconizable} = useTicket()

  if(iconizable.find(item => translation_asset_id.includes(item))){
    return( <Grid container justifyContent='center' alignItems='center' className={classes.iconAsImageContainer}>
      <TicketNameToIcon name={translation_asset_id} className={classes.iconAsImage} />
    </Grid>)
  }

  return (<CardMedia
    component="img"
    alt=""
    height="250"
    image={resizeCloudinaryImage(thumbnail, 350, 350)}
    title=""
    className={classes.item}
  />
  )
}




const Ticket = () => {

  const classes = useStyles({})()
  const {id, show, thumbnail, bookable, booked, basePath} = useTicket()

  return ( <Card className={classes.root} elevation={booked? 0: 0}>
    <CardActionArea onClick={show}>
   
      <CustomCardMedia />
      <CardContent >
        <TicketName />
        <Typography variant="body2" color="textSecondary" component="div">
          <TicketStatus />
          {/* <TicketAvailability /> */}
          <TicketPrice />
        </Typography> 
      </CardContent>


    </CardActionArea>
    <CardActions>
      <ShowButton resource="upgrades" basePath={basePath} record={{id}} label="resources.upgrades.actions.details" />
    </CardActions>
    <Done show={booked} count={booked} />
  </Card>)
}


const CustomIterator = ({ ids=[], data, basePath }) => {

  const classes = useStyles({})()

  return (
  <Box m={2} className={classes.container}>
  <Grid container spacing={3} direction="row">{
    ids.map(id => (<Grid key={id} item xs={12} sm={6} md={3} lg={3} xl={2} className={classes.card}><TicketContext record={ data[id]} basePath={basePath}><Ticket /></TicketContext></Grid>))
  }</Grid>
  </Box>);
}




export default CustomIterator


import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/CheckBox'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles(theme => ({
   
    overlay: {
      position : 'absolute', 
      zIndex : 2,
      top: 20, 
      right : 20,
    },

    overlayIcon: {
      width: 100,
      height : 100,
      color : theme.palette.secondary.main,
      // position : 'absolute', 
      // zIndex : 2,
      // top: 20, 
      // right : 20
    },

    badge: {
      fontSize: 40,
      borderRadius: 40,
      height: 40,
      minWidth: 40
    }
    
  }));



const Done = ({show=false, count=0}) => {

    const classes = useStyles()
  
    if(!show){
      return null
    }

     
      return ( <div className={classes.overlay}><Badge classes={{badge: classes.badge}} anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }} badgeContent={count} color="secondary">
      <Icon className={classes.overlayIcon} />
   </Badge></div>)
    
  
  }


export default Done
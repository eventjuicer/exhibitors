

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = (props) => makeStyles({
   
    overlay: {
      position : 'absolute', 
      zIndex : 2,
      top: 0, 
      left : 0,
      display:'flex',
      width : '100%',
      height : '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: '1111',
        position: 'absolute',
        backgroundSize: 'contain',
        backgroundImage: 'url(https://res.cloudinary.com/eventjuicer/image/upload/v1561412798/soldout.png)',
        backgroundRepeat: 'no-repeat'
    },
    
  });



const SoldOut = ({show=false}) => {

    const classes = useStyles({})()
  
    if(!show){
      return null
    }
  
    return (
      <Grid container className={classes.overlay} justifyContent="center" alignItems='center'>
      <Grid item className={classes.image}>
      </Grid>
      </Grid>
    )
  }


export default SoldOut
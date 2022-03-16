

import { makeStyles } from '@material-ui/core/styles';
import Chip from './Chip'
import {useTicket} from '../contexts'
import {grey, blue, teal} from '@material-ui/core/colors';
/**
 * 
 * https://v4.mui.com/customization/color/#color-palette
 */

const useStyles = makeStyles(theme => ({

  future: {
    backgroundColor: blue[200]
  },

  soldout: {
    backgroundColor: grey[200]
  },

  past: {
    backgroundColor: grey[200]
  },

  bookable: {
    backgroundColor: teal[200]
  },

  other: {
    backgroundColor: grey[300]
  }

}))


const TicketStatus = () => {

        const classes = useStyles()
        const {future, past, remaining, bookable} = useTicket()  
      

        if(future){
          return <Chip label="common.statuses.not_yet_available" className={classes.future} /> 
        }

        if(!remaining > 0){
          return <Chip label="common.statuses.soldout" className={classes.soldout} />
        }
      
        if(past){
          return <Chip label="common.statuses.overdue" className={classes.past} /> 
        }
      
        /**
         * bookable - number of items PURCHASABLE (including ticket limitations!)
         */

        if(bookable>0){
            return <Chip label="common.statuses.available" className={classes.bookable}  />
        }
      
        return  <Chip label="common.statuses.unavailable" className={classes.other} />
      
     

}

export default TicketStatus


import DateInFuture from './DateInFuture'
import {useTicket} from '../contexts'
import {useTranslate} from 'react-admin'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  available: {

  }

}))



    //                 `
    //                 ${translate("common.sales.ends")}: ${data[id].end}
    //                 ${translate("common.sales.remaining")}: ${data[id].bookable} 
    //         {/* <ItemStatusField record={data[id]} source="booked" /> */}

const TicketAvailability = () => {

        const classes = useStyles()
        const {future, start, end, past, remaining, bookable} = useTicket()  
        const translate = useTranslate()

      //
      
        if(future){
          return (<div><DateInFuture date={start} /></div>)
        }

      
      
        /**
         * bookable - number of items PURCHASABLE (including ticket limitations!)
         */

        if(bookable>0){
            return <span>{`

            ${translate("common.statuses.available")} 
            ${bookable} 
            ${translate("common.pcs")}

            `}</span>
        }
      
        return  null
      
     

}

export default TicketAvailability


/**
 * 
 * 
 *  TICKET DETAILS
        <ul>
        <li>{translate("common.sales.ends")}: {record.end}</li>
        <li>{`${translate("common.sales.bookable")}: ${record.bookable} ${translate("common.sales.pcs")}`}</li>
        </ul>


 */
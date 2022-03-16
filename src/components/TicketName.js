

import {useTicket} from '../contexts'
import  Typography  from './Typography'


const TicketName = () => {

    const {localName} = useTicket()

    return <Typography gutterBottom variant="h5" component="h2" label={ `${localName}.name`}/> 

}


export default TicketName
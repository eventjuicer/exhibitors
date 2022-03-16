


import {useTicket} from '../contexts'
import { resizeCloudinaryImage } from '../helpers'

const TicketImage = ({size=700}) => {

    const {image} = useTicket()

    if(!image){
        return null
    }

    return (    
        <div><img src={resizeCloudinaryImage(image, size, size)} style={{width : '100%'}} /></div>
      )
}



  export default TicketImage
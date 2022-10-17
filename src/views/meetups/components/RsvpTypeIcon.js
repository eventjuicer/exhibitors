

import InputIcon from '@material-ui/icons/Input';
import SendIcon from '@material-ui/icons/Send';
const RsvpTypeIcon = ({record}) => {

    if(!record){
        return null
    }

    return (record.direction == "P2C" ?  <InputIcon /> : <SendIcon />)



}


export default RsvpTypeIcon
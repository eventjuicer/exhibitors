

import InputIcon from '@material-ui/icons/Input';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';


const RsvpTypeIcon = ({record}) => {

    if(!record){
        return null
    }
    switch(record.direction){
        case "P2C":
            return  <InputIcon />
        case "C2P":
            return <SendIcon />
        case "LTD":
            return <SettingsIcon />
        default: 
            return null;
    }

}


export default RsvpTypeIcon
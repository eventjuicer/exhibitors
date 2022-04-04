

import get from 'lodash/get'
import TimerIcon from '@material-ui/icons/Timer';

const IsVipcodeUsed = ({record={}, source}) => {

    if(!record){
        return null
    }

    if(!record.participant_id){
        return <TimerIcon />
    }

    return get(record, "participant.email", "")

}


export default IsVipcodeUsed
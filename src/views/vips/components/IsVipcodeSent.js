
import { useLocale } from 'react-admin'; 
import { Typography } from '../../../components';

const IsVipcodeSent = ({record={}, source}) => {

    const locale = useLocale()

    const {blocked_till} = record

    const till = blocked_till? (new Date(blocked_till)).toLocaleString(locale).slice(0,-3): ""

    if(!record){
        return null
    }

    if(record.email){
        return <span>{record.email}<br/>
        <Typography variant="overline" label="common.blocked" labelProps={{data: till}} /></span> || ""
    
    }

    return ""
}


export default IsVipcodeSent
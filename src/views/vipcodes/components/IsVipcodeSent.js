
import { useLocale } from 'react-admin'; 
import { Typography } from '../../../components';

const IsVipcodeSent = ({record={}, source}) => {

    const locale = useLocale()

    const {blocked_till} = record

    const localBlockedDate = blocked_till? (new Date(blocked_till)).toLocaleString(locale).slice(0,-3): ""

    console.log(`${localBlockedDate}`)

    if(!record){
        return null
    }

    return <span>{record.email}<br/>
    <Typography variant="overline" label="common.blocked" post={` ${localBlockedDate}`} /></span> || ""

}


export default IsVipcodeSent


import Markdown from "./Markdown"
import {useTicket} from '../contexts'
import Box from '@material-ui/core/Box'
import {useTranslate} from 'react-admin'
import Alert from "./Alert"

const TicketDescription = () => {

    const translate = useTranslate()
    const {localName} = useTicket()
    const specs = translate(`${localName}.specs` )

    return (<Box m={2}>
        <Markdown label={`${localName}.description`}></Markdown>
        {specs ? <Alert type="info"><Markdown>{specs}</Markdown></Alert>: null}
    </Box>)
}

export default TicketDescription



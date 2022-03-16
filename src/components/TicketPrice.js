

import {useTicket} from '../contexts'
import {useTranslate} from 'react-admin'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {
        whiteSpace: "nowrap"
    }
}))
const TicketPrice = () => {
    const {localPrice, localCurrency} = useTicket() 
    const translate = useTranslate()
    const classes = useStyles()

    return <span className={classes.root}>{`${localPrice} ${localCurrency}${translate('common.sales.net')}`}</span>
}


export default TicketPrice

import React, {useState} from 'react'
import { useTranslate, useRefresh } from 'react-admin';
import Box from '@material-ui/core/Box'; 
import Grid from '@material-ui/core/Grid'; 
import QuantitySelect from './QuantitySelect';
import BuyButton from './BuyButton'

const QuantityBox = ({data}) => {

    const translate = useTranslate()
    const [itemsCount, setItemsCount] = useState(0)
   
    const renderTotal = () => {

        const total = data.localPrice * itemsCount;
        return `${total} ${data.localCurrency} ${translate('common.sales.net')}`
    }

    return (
        
        <Box m={5}>
        <Grid container alignItems='center' spacing={3}>
            <Grid item>
            <QuantitySelect defaultValue={0} choices={
               [...Array(data.bookable+1).keys()]
           } onChange={setItemsCount} />
            </Grid>
            <Grid item>
            { renderTotal() }
            </Grid>
            <Grid item>
                <BuyButton ticket_id={data.id} quantity={itemsCount} />
            </Grid>
        </Grid>
        </Box>
    )

}

export default QuantityBox
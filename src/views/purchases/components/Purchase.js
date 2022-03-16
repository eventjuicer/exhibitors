import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {grey} from '@material-ui/core/colors';
import {usePurchase} from '../../../contexts'
import PurchaseStatus from './PurchaseStatus';
import PurchasedTicket from './PurchasedTicket';
import PurchaseRevoke from './PurchaseRevoke'

import {Typography} from '../../../components'

const useStyles = makeStyles(theme => ({

    active: {

    },
    cancelled: {
        backgroundColor: grey[100]
    },
    cancelledText: {
        color:  grey[300]
    },
    amount: {

    }
}))


const PurchaseStatusAndPrice = ({amount=0, ok=true}) => {

    const classes = useStyles()

    return (
        <Grid container alignItems='center' justifyContent='space-evenly'>
        <Grid item xs={5} sm={4} md={6}>
            <PurchaseStatus />
        </Grid>
        <Grid item xs={5} sm={4} md={6}>                 

            <Grid direction="row" container spacing={1} alignItems='baseline' justifyContent='flex-end'>
                <Grid item xs={6} sm={6} md={12}>
                    <Typography variant="h5" className={!ok?classes.cancelledText: undefined}>{amount}</Typography>
                </Grid>    
                <Grid item xs={6} sm={6} md={12}>
                    <Typography variant="caption" className={!ok?classes.cancelledText: undefined} label="common.sales.net" />
                </Grid>   
            </Grid>
      
        </Grid>
        </Grid>
    )
}


const Purchase = () => {
    const classes = useStyles()
    const {amount, current, status, ok, tickets} = usePurchase()

    if(!current && status==="cancelled"){
        return null
    }


    return ( <Card elevation={ok? 1: 0} className={ok? classes.active: classes.cancelled}>

        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
            {/* <CardActionArea className={classes.grid}> */}
            {tickets.map( ticket => (<PurchasedTicket key={ticket.id} quantity={ticket.quantity} name={ticket._name || ticket.translation_asset_id} />))}
            {/* </CardActionArea> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>

                <Box m={1}>

                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={6}>
                        <PurchaseStatusAndPrice amount={amount} ok={ok} />    
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <PurchaseRevoke />
                    </Grid>
                </Grid>

              
                </Box>

            </Grid>
           
        </Grid>
      
      </Card>)
   // return (<Card className={classes.card}><CardContent><PersonIcon /></CardContent></Card>)
}



export default Purchase
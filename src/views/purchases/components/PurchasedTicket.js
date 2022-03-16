import React from 'react';
import { useTranslate } from 'react-admin';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import {isTranslationAssetId} from '../../../i18n'
import { usePurchase } from '../../../contexts'
import TicketNameToIcon from './TicketNameToIcon'
import classNames from 'classnames';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({

  
    texts: {
        // maxWidth: 100
    },

    icon: {
        color: grey[700],
        width: 40,
        height: 40,
        margin: 20,
        [theme.breakpoints.down("md")]: {
            width: 30,
            height: 30,
        }
    },

    iconDisabled: {
       
        color: grey[400],
       
    },
    cancelledText: {
        color: grey[400],
    }
}))





const Quantity = ({quantity}) => {
    return quantity > 1 ? <span style={{fontWeight: 900}}>{`${quantity} x `}</span> : null
}

const TicketName = ({name, quantity, ok}) => {
    const translate = useTranslate()
    const classes = useStyles()
    return (<Typography variant="h6" className={!ok?classes.cancelledText: undefined}>
    <Quantity quantity={quantity} />
    {isTranslationAssetId(name)? translate(`${name}.name`): name}
    </Typography>)
}



const PurchasedTicket = ({quantity=1, name=""}) => {
    const classes = useStyles()
    const {datetime, buyer, ok, roles} = usePurchase()

   return (<Grid container>
    <Grid item xs={2} sm={2} md={2}>
        <TicketNameToIcon name={name} roles={roles } className={classNames(classes.icon, {[classes.iconDisabled]: !ok})}/>
    </Grid>
    <Grid item xs={10} sm={10} md={10}>
        <CardContent className={classes.texts}>
        <TicketName quantity={quantity} name={name} ok={ok} />
        <Typography variant="body2" color="textSecondary" className={!ok?classes.cancelledText: undefined} component="p">{datetime} {buyer}</Typography>
        </CardContent>
    </Grid>
</Grid>)
}


export default PurchasedTicket

import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button} from '../../../components'
import {usePurchase, useSetModal, useCloseModal} from '../../../contexts'
import {grey} from '@material-ui/core/colors';
import {useDelete, useRefresh } from 'react-admin';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({

    active: {

    },
    cancelled: {
        backgroundColor: grey[100]
    },
    cancelledText: {
        color:  grey[300]
    }
}))


const PurchaseRevoke = ({basePath="/purchases", resource="purchases"}) => {

    const {status, id} = usePurchase()
    const classes = useStyles()
    const modal = useSetModal()
    const closeModal = useCloseModal()
    const refresh = useRefresh()
    const [deletePurchase] = useDelete(resource, id, {}, {
        onSuccess: ({data}) => {
            refresh() 
            closeModal()
        },
        onFailure: (error) => {
            refresh() 
            closeModal()
        }
    })

    const handleConfirmDelete = () => modal("resources.purchases.cancel.button", "", [
        <Button key="accept" label="common.accept" color="secondary" onClick={deletePurchase} />
    ])

    if(!id || status !== "new"){
        return null
    }

    return  (<Grid container justifyContent='space-evenly' direction='row' alignItems='baseline'>
    <Grid item xs={6} sm={5} md={12}>
        <Typography variant="body1" label="resources.purchases.cancel.info" />
    </Grid>
    <Grid item xs={6} sm={5} md={12}>
        <Button onClick={handleConfirmDelete} color="primary" variant="text" startIcon={<HighlightOffIcon />} label="resources.purchases.cancel.button" />
    </Grid>
    </Grid>)
}


export default PurchaseRevoke
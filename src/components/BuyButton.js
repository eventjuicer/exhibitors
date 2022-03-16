import * as React from "react";
import {
    useMutation, 
    useLocale,
    useNotify, 
    useRedirect, 
    useRefresh 
} from 'react-admin';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from './Button'
import { useCloseModal } from "../contexts";





const BuyButton = ({ 
    ticket_id=0, 
    quantity=0, 
    label="common.actions.buy", 
    color="primary", 
    disabled=false
}) => {

    const locale = useLocale()
    const notify = useNotify();
    const redirect = useRedirect();
    //const refresh = useRefresh();
    const closeModal = useCloseModal()

    const [handle, { loading }] = useMutation({
        type: 'create',
        resource: 'purchases',
        payload: { data: {
            ticket_id,
            locale,
            quantity,
            template : `${process.env.REACT_APP_UPGRADES_TEMPLATE}`,
            cc :  `${process.env.REACT_APP_UPGRADES_CC}`,
        } }
    },{
        onSuccess: ({data}) => {
            notify("common.success")
            closeModal()
            redirect("/purchases")
        },
        onFailure: (error) => {
            notify("common.error")
            closeModal()
        }
    });

    return (<Button color={color} label={label} onClick={handle} disabled={disabled || loading || !quantity>0} startIcon={<AddShoppingCartIcon />} />)
};

export default BuyButton


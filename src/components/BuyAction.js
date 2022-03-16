import React from 'react'
import { useTranslate } from 'react-admin';
import {Button} from '.';
import Cart from '@material-ui/icons/AddShoppingCart'
import QuantityBox from './QuantityBox'
import { useSetModal, useTicket } from '../contexts';

const CartButton = (props) => <Button color="primary" startIcon={<Cart />} {...props}/>

const BuyAction = () => {

    const translate = useTranslate()
    const modal = useSetModal()
    const data = useTicket()
    const {id, bookable, booked} = data

    const handleClick = () => modal( translate("resources.upgrades.dialog"), <QuantityBox data={data}  /> ) 
    
    if(!id){
        return null
    }

    if(bookable && bookable > 0){        
        return <CartButton  onClick={handleClick} label={ booked && booked > 0 ? 'common.actions.buy_more':'common.actions.buy'} />
    }
   
    return <CartButton disabled={true} label="common.statuses.unavailable" />

}




export default BuyAction
import React from 'react'
import BuyButton from './BuyButton'
import { TicketContextViaQuery, useTicket } from '../contexts'
import { useToken } from '../contexts'

const BuyTicketByNameButtonComponent = ({name="", quantity=1}) => {

    const {id, translation_asset_id, bookable, booked} = useTicket()

    if(!translation_asset_id || !bookable){
        return null
    }

    return (<BuyButton disabled={booked>0} color="secondary" id={id} quantity={quantity} label={`${translation_asset_id}.button`} />)
}


const BuyTicketByNameButton = ({name=""}) => {

    const token = useToken()

    if(!token){
        return null
    }

    return (<TicketContextViaQuery query={(ticket) => ticket.translation_asset_id.includes(name)}><BuyTicketByNameButtonComponent /></TicketContextViaQuery>)
}

export default BuyTicketByNameButton
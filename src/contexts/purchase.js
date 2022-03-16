import React, {useContext, useMemo} from 'react'
import { useListContext, useLocale } from 'react-admin'
import {get} from '../helpers'

const PurchaseContextContainer = React.createContext({})



export const PurchaseContext = ({id, children, mostRecentEventId}) => {

    const { ids, data, basePath } = useListContext();
    const item = get(data, id, {})

    const viewLocale = useLocale()

    const value = useMemo(()=> {

        const parsedDate = new Date(item.ts)
        const parsedAmount = new Intl.NumberFormat(viewLocale, { 
            style: 'currency', 
            currency: item.locale=="pl"? "PLN" : 'EUR',
            maximumFractionDigits: 0
        })
        return {
            id: item.id,
            status: item.status,
            ok: item.status != "cancelled",
            amount: parsedAmount.format(item.amount),
            locale: item.locale,
            date: parsedDate.toLocaleDateString(viewLocale),
            datetime: parsedDate.toLocaleString(viewLocale),
            buyer: item.buyer_email,
            ticket_ids: item.ticket_ids,
            roles: item.tickets.map(ticket=>ticket.role),
            tickets: item.tickets,
            current: item.event_id == mostRecentEventId
        }
    }, [item.id, item.status, viewLocale, mostRecentEventId])


    return (<PurchaseContextContainer.Provider value={value}>{children}</PurchaseContextContainer.Provider>)
}


export const usePurchase = () => {

    const value = useContext(PurchaseContextContainer)
   
    return value 
}


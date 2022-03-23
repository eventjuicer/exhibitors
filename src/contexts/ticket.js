import React from 'react'
import {useLocale, useGetList, useMutation, linkToRecord} from 'react-admin'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {isObject, isFunction, get} from '../helpers'


export const TicketContextContainer = React.createContext({});

export const useTicket = () => React.useContext(TicketContextContainer)  


export const TicketContextViaQuery = ({resource="upgrades", query=null, children}) => {

    const { data, ids, loading, error } = useGetList(resource);

    if(loading || error || !isFunction(query)){
        return null
    }

    const lookup = Object.values(data).find(ticket => query(ticket))

    if(!lookup){
        return null
    }

    return <TicketContext record={lookup}>{children}</TicketContext>


} 


export const TicketContext = ({record={}, basePath, resource, children}) => {
    const locale = useLocale()
    const dispatch = useDispatch()
    const {push} = useHistory()

    const [mutate, { loading }] = useMutation();
    const buy = (quantity) => mutate({
        type: 'create',
        resource: 'purchases',
        payload: {
            id: record.id,
            data: {  }
        },
    });

    const value = React.useMemo(()=> ({
        ...record,
        resource,
        basePath,
        localPrice: isObject(record.price) ? get(record.price, locale): record.price,
        localName: isObject(record.names) ? get(record.names, locale): record.names,
        localCurrency: locale === "pl"? "PLN": "EUR", 
        show: () => dispatch(push(linkToRecord(basePath, record.id, "show"))),
        buy,
        iconizable: ["carpet", "electricity", "voltage", "display", "parking", "catering"]
    }), [record.id, record.bookable, locale, basePath, resource])
    return <TicketContextContainer.Provider value={value}>{children}</TicketContextContainer.Provider>
}



  /**
   * 
   * 


        bookable: 0
        booked: 0
        change: ""
        changeable: false
        end: "2021-10-14 23:59:00"
        event_id: 95
        id: 1997
        image: "https://res.cloudinary.com/eventjuicer/image/upload/v1539188747/upgrade_electricity.jpg"
        in_dates: 0
        names: {pl: 'resources.upgrades.misc.electricity', en: 'resources.upgrades.misc.electricity', de: 'resources.upgrades.misc.electricity'}
        price: {pl: 600, en: 150, de: 150}
        purchase_ids: []
        remaining: 130
        role: "service_external"
        start: "2021-09-04 12:00:00"
        thumbnail: "https://res.cloudinary.com/eventjuicer/image/upload/v1539188747/upgrade_electricity.jpg"
        ticket_id: 1997
        unpaid: 0

*/
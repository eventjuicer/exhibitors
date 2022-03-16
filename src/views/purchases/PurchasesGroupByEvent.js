import React from 'react';
import { useListContext, useLocale } from 'react-admin';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import {PurchaseContext} from '../../contexts'
import {Purchase} from './components';
import {groupBy, head, get, orderBy} from '../../helpers'

const FormattedDate = ({date, time=false}) => {
    const locale = useLocale()
    const parsed = new Date(date)
    return time ? parsed.toLocaleString(locale): parsed.toLocaleDateString(locale)
}

const EventDetails = ({name="", location="", date=""}) => {
   
    return (<Grid container spacing={3}>
        <Grid item>
        {/* <Typography variant="h5" gutterBottom>{name}</Typography> */}
        </Grid>
        <Grid item>
        <Typography variant="h5" gutterBottom>{location}</Typography>
        </Grid>
        <Grid item>
        <Typography variant="h5" gutterBottom><FormattedDate date={date} /></Typography>
        </Grid>
        </Grid>
    )
}


/**
 * 
 * TODO: show cancelled purchases only for active event!
 * 
 */

const Timeline = () => {

    const {data} = useListContext();
    const groupedByEvent = groupBy(data, "event_id")
    const eventIdsSorted = Object.keys(groupedByEvent).sort((a, b) => b - a);
    const mostRecentEventId = head(eventIdsSorted)

     return (
        <Box pt={5}>{eventIdsSorted.map(id => {

            const first = head(groupedByEvent[id]);         
            const sorted = orderBy(groupedByEvent[id], ["id"], ["desc"])

            return (<Box key={id} mb={5}>
                <EventDetails name={get(first,"event.name")} location={get(first, "event.loc")} date={get(first, "event.starts")} /> 
                <Box ml={5} mt={2} mr={5}>{sorted.map(p => <PurchaseContext key={p.id} mostRecentEventId={mostRecentEventId} id={p.id}><Purchase /></PurchaseContext>)}</Box>
                </Box>)

        })}</Box>)
}

export default Timeline;


/**
 * 
 
amount: 80
buyer_email: "adam@targiehandlu.pl"
buyer_id: 92989
company_id: 1216
event_id: 89
event_name: "20. Targi eHandlu"
finalized: 0
id: 121534
locale: "pl"
status: "cancelled"
ticket_ids: [1781]
tickets: [{…}]
ts: "2020-09-28 13:27:04"


tickets 


end: "2021-10-14 23:59:59"
id: 1781
names: {pl: 'resources.upgrades.booth.chair', en: 'resources.upgrades.booth.chair', de: 'resources.upgrades.booth.chair'}
price: {pl: 80, en: 20, de: 20}
quantity: 1
role: "service_external"
start: "2021-09-04 12:00:00"



 */
import React from 'react'
import { useTranslate } from 'react-admin';
import moment from 'moment';

const DateInFuture = ({disabled=false, date="", ago="common.ago"}) => {

    const translate = useTranslate();
    const parsed = moment(date)
    const now = moment()

    if(disabled){
        return null
    }

    const days = parsed.diff(now, "days")
    const hours = parsed.diff(now, "hours")
    const minutes = parsed.diff(now, "minutes")

    
    if(days > 0){
        return `${Math.abs(days)} ${translate('common.days')} ${ago ? translate(ago): null}`
    }

    if(hours > 0){
        return `${Math.abs(hours)} ${translate('common.hours')}  ${ago ? translate(ago): null}`
    }

    return `${Math.abs(minutes)} ${translate('common.minutes')} ${ago ? translate(ago): null}`


}

export default DateInFuture
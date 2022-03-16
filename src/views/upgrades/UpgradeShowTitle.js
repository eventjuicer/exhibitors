import React from 'react';
import {useTranslate, useLocale} from 'react-admin';

const ShowTitle =  ({record={} }) => {
    
    const translate = useTranslate()
    const locale = useLocale()

    if(! "names" in record || ! record.names){
        return null
    }

    return <span>{translate( `${record.names[locale]}.name`)}</span>

}

export default ShowTitle
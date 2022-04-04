import React from 'react';
import get from 'lodash/get';
import { useSettings } from '../contexts';


const LinkField = ({ record = {}, source }) => {

    const {excluded_domains} = useSettings("visitors", {})
    
    if(!record){
    return null
    }

    const link = `${get(record, source, "")}`.trim()

    if(!link || excluded_domains.some(shitty => link.includes(shitty))){
        return <span>N/A</span>
    }

    return (<span><a href={`https://${link}`} target="_blank">{link}</a></span>);

}

export default LinkField;

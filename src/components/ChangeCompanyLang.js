import React from 'react';
import Button from './Button'

import {
    useUpdate,
} from 'react-admin';

import { getLocalesArray } from '../i18n';
import LanguageIcon from '@material-ui/icons/Language';
import {useCompanyLang} from '../helpers'
import { Box } from '.';

const ChangeCompanyLang = () => {


    const [update] = useUpdate();
    const check = useCompanyLang()
    const [current, setCurrent] = React.useState("")
    const locales = getLocalesArray()

    React.useEffect(()=>{
        if(check && check.value){
            setCurrent(check.value)
        }
    },[check])

    const handleClick = (locale) => {
        if(check && check.id){
            update("companydata", check.id, {value: locale}, {}, {
                onSuccess: ({data}) => {
                    setCurrent(data.value)
                }
            })
        }
    }

    if(!check){
        return null;
    }

    return (<Box>{locales.map(locale => 
        <Button 
        key={locale}
        label={locale}
        variant={current == locale? "contained": "outlined"}
        color={current == locale? "primary": "default"}
        onClick={() => handleClick(locale)}
        startIcon={<LanguageIcon />}
      />
    )}</Box>)


}



export default ChangeCompanyLang

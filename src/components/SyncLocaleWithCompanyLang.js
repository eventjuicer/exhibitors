
import React from 'react'
import {useLocale, useUpdate} from 'react-admin'
import { useToken } from '../contexts'
import { useGet, isEmpty } from '../helpers'
/**
 * 
 * on every locale change try to automatically save companydata lang!
 * 
 */

const SyncLocaleWithCompanyLang = ({force=false}) => {

    const locale = useLocale()
    const token = useToken()
    const {data} = useGet(token? "/companydata": null)
    const lang = !isEmpty(data) && Array.isArray(data)? data.find(cd => cd.name == "lang"): undefined;
    const [update] = useUpdate();

    React.useEffect(()=>{

        if(lang){
            if(force || isEmpty(lang.value)){
                update("companydata", lang.id, {value: locale}, lang)
            }
        }

    },[locale, token, lang, force])

    return null
}

export default  SyncLocaleWithCompanyLang

import React from 'react'
import { useLogin, useNotify, useTranslate, useRefresh } from 'react-admin'
import { useUrlToken } from '../helpers'
import { useLoginSuccess } from '../contexts'
import { useHistory } from 'react-router-dom';

const UrlWatcher = () => {

    const [token, pathname] = useUrlToken()
    const login = useLogin()
    const notify = useNotify()
    const refresh = useRefresh()
    const translate = useTranslate()
    const onSuccess = useLoginSuccess()
    const {push} = useHistory()

    React.useEffect(() => {

        if(token){
            login({token}, pathname)
            .then( data => {
                onSuccess(data)
                // refresh()
                // push(pathname)
                window.location.reload()
            })
            .catch(error => {
                notify("token error")
                console.log(error)
            })
        }

    }, [token])


    return null

}


export default UrlWatcher



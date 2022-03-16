
import React, {useContext, useCallback} from 'react'
import { useLocale, DataProviderContext, useNotify, useRedirect, useRefresh } from 'react-admin'
import {useSettings} from '../contexts'
import { lsSet, lsGet } from './storage'
import { useLocation } from 'react-router-dom' 
import {validateToken} from './varia'
// import FakeLink from '../components/FakeLink'
// import Link from '../components/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { isString, isFunction } from 'lodash'

export const useIsMobile = (mobileBreakpoint="sm") => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down( mobileBreakpoint ));

  return isMobile
}


export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      return lsGet(key, initialValue)
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);      
      lsSet(key, valueToStore)
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}


export const useDates = () => {
  const dates = useSettings("event.dates")
  const locale = useLocale()
  return dates;

}


export const useGet = (path, usePublicApi=false) => {


  const [data, setData] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const dataProvider = useContext(DataProviderContext);

  React.useEffect(()=>{

    let isCancelled = false;

    if(path && isString(path)){
      dataProvider.get(path, usePublicApi).then(({data}) => {
        if(!isCancelled){
          setLoading(false)
          setData(data)
        }
      }).catch(error => {
        if(!isCancelled){
          setLoading(false)
          setError(error)
        }
      })
    }

    return () => {
      isCancelled = true;
    };

  }, [path, usePublicApi])

  return {data, loading, error}

}

export const useSearchParams = () => {
  const {search } = useLocation()
  return new URLSearchParams(search);
}



export const useUrlToken = () => {

  const searchParams = useSearchParams()
  const { pathname } = useLocation()

  let token = null;

  if(searchParams && searchParams.has("token") && validateToken(searchParams.get("token")) ){
     token = searchParams.get("token")
  }

  return [token, pathname.includes("login")? "/": pathname]

}


export const useUploadFiles = (imageable_type="company") => {

    const dataProvider = useContext(DataProviderContext);

    return React.useCallback((files, imageable_id, onSuccess, onFailure) => dataProvider.upload(files, imageable_type, imageable_id)
      .then(response => onSuccess && onSuccess(response))
      .catch(error =>  onFailure && onFailure(error))
      , [imageable_type])
  
}
  
  
  
export const useOnEdit = (to="/", callback, msg="common.success") => {

  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  return React.useCallback(()=>{

    refresh();
    notify(msg);
    redirect(to);

    if(isFunction(callback)){
      callback();
    }

  }, [to, msg, callback])

}


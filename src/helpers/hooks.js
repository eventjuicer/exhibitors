
import React, {useContext, useCallback} from 'react'
import { useLocale, DataProviderContext, useNotify, useRedirect, useRefresh, useGetList } from 'react-admin'
import {useSettings, useToken, useCompany} from '../contexts'
import { lsSet, lsGet } from './storage'
import { useLocation, useHistory } from 'react-router-dom' 
import {validateToken} from './varia'
// import FakeLink from '../components/FakeLink'
// import Link from '../components/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { isString, isFunction, get, isEmpty } from 'lodash'

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


export const useCompanyLang = () => {

  const token = useToken()
  const {data} = useGet(token? "/companydata": null)

  if(!token || isEmpty(data) ){
    return undefined
  }

  return Array.isArray(data)? data.find(cd => cd.name == "lang"): {};

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


export const useCompanyDataItem = (name) => {

  const {data, loading, error} = useGet("companydata", false)
  return (data || []).find(item => item.name == name) || {} 

}

export const useSearchParams = () => {
  const { search } = useLocation()
  return new URLSearchParams(search);
}

export const useStoreCompanyId = (key="guestCompanyId") => {

  const searchParams = useSearchParams()
  const [_, toLocalStorage] = useLocalStorage(key, 0)

  React.useEffect(()=>{

    if(searchParams.has("company_id")){
      toLocalStorage(searchParams.get("company_id"))
    }

  }, [ searchParams.toString() ])


}

export const useAddCompanyIdToUrl = () => {

  const { pathname, search } = useLocation()
  const company_id = useCompany("id")
  const searchParams = useSearchParams()
  const history = useHistory()

  React.useEffect(()=>{

    if(company_id > 0 && !searchParams.has("company_id")){
      history.replace({
        pathname,
        search: new URLSearchParams({company_id}).toString()
      })
    }

  }, [company_id, pathname, search])
  

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


export const useMeetups = (direction="C2P", path="participant.id") => {

  const { data, ids, loading, error } = useGetList("meetups");

  if(loading || error){
    return []
  }

  return Object.values(data).filter(item => direction? item.direction == direction: true).map(item => get(item, path) )
}


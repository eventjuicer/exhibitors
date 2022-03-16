

import { fetchUtils } from 'react-admin';
import get from 'lodash/get';
import { getLocalesArray } from '../i18n';
import {getFullUrl} from './url'
import {lsSet, lsGet} from './storage'
import { rawFetchApi } from './fetch';
import {timestamp} from './timedate'
import {getCompanyId} from './varia'

export const updatePerms = (redirectTo = "") => rawFetchApi("/settings", null, (data) => { 

    const locales = getLocalesArray()
  
    if(!"account-modules" in data){
      return false
    }
    
    //save locale only when we dont have local one!
    if(!lsGet("locale") && "lang" in data && locales.includes(data.lang) ){
      lsSet("locale", data.lang)
    }
  
    lsSet("permissions", data["account-modules"]);
    lsSet("permissions_checked",  timestamp() );
    return data["account-modules"];
  
  }, redirectTo);
  
  export const hasFullAccess = () => `${process.env.REACT_APP_FULL_ACCESS_ACCOUNT}` == getCompanyId()
  
  
  export const hasAccessTo = (perms, strOrArr, action) => {
  
    if(perms === undefined){
      return false;
    }
  
    if(perms && perms.trim() === "*" || hasFullAccess() ){
      return true;
    }
  
    return [].concat(strOrArr).some(asset => perms.indexOf(asset) > -1 )
  }
  
  
  export const checkAccessFor = (redirectTo) => {
    const permissions = lsGet("permissions");
    const lastCheck = lsGet("permissions_checked", 0);
  
    //use cache perms for max 1 hr
    if(permissions && timestamp() - lastCheck < 3600)
    {
      //moved to AUTH SAGA
      //updatePerms();
      return Promise.resolve(permissions);
    }
    return updatePerms(redirectTo);
  }
  
  export const refreshUserData = (newToken = null) => rawFetchApi("/me", newToken, (data) => {
   
    if(newToken){
      lsSet("token", newToken);
    }
    lsSet('profile', data);
    return true;
  });
  
  
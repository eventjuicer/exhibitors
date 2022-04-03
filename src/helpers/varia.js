

import get from 'lodash/get';
import {getFullUrl} from './url'
import {lsSet, lsGet, lsRem} from './storage'
import {addUrlParam} from './url'


export const findInArrayOrObject = (arrobj, callback) => {

  if(Array.isArray(arrobj)){
    return arrobj.filter(callback)
  }

  return Array.isArray(Object.values(arrobj)) ? Object.values(arrobj).filter(callback): []
}


export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};

export const getToken = () => {
  const token = lsGet('token');
  return validateToken(token) ? token : false;
};

export const getUserData = (path, replacement) => {
  const profile = lsGet("profile");
  return path !== undefined ? get(profile, path, replacement) : profile;
};

export const clearUserData = () => {
  lsRem('profile');
  lsRem('token');
  lsRem('permissions');
  lsRem('permissions_checked');
};


export const getUserFullName = () => {
  return getUserData('profile.fname') + ' ' + getUserData('profile.lname');
};

export const getUserId = () => {
  return getUserData('id', 0);
};

export const getCompanyName = () => {
  return getUserData('company.profile.name',
          getUserData('company.slug',
            getUserData('profile.cname2', '')
          ));
};

export const getCompanyId = () => {
  return getUserData('company.id', 0);
};


export const vipCodeUrl = (slug, code) => getFullUrl(`/exhibitors/${slug}?vipcode=${code}`)

export const getProfileUrl = (params = "") => {

  let url = getFullUrl(`exhibitors/${getUserData('company.slug')}`)

  if(params.length){
    url = addUrlParam(url, params)
  }

  return url
}





import { fetchUtils } from 'react-admin';
import { getToken} from './varia'
import isFunction from 'lodash/isFunction'
import { fixApiPath } from './url'

export const fetchHtml = url => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    };
  
    return fetchUtils.fetchJson(url, options);
    // .then(response => {
    //
    //   console.log(response);
    //
    //   return Promise.resolve( );
    // });
  };

  
  export const rawFetchApi = (endpoint, newToken, onSuccess, redirectTo = "/login") => {
  
    const token = newToken || getToken();
    const options = {}

    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('x-token', `${token}`);

    endpoint = fixApiPath(endpoint)
  
    return fetchUtils.fetchJson(endpoint, options).then(response => {

      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      return response.json

    }).then(json => {
  
        if (!('data' in json)) {
          return Promise.reject({ redirectTo });
        }
  
        if(isFunction(onSuccess)){
          const onSuccessValue = onSuccess(json.data)
          if(onSuccessValue === false){
            return Promise.reject({ redirectTo });
          }
          return onSuccessValue
        }
  
        return json.data
      });
  
  };
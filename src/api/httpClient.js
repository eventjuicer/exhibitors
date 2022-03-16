import { fetchUtils } from 'react-admin';
import { getToken, fixApiPath } from '../helpers';
import restProvider from './restProvider'


export const httpClient = (url, options = {}) => {

  url = fixApiPath(url)

  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  const token = getToken();
  options.headers.set('x-token', `${token}`);
  options.headers.set('x-basehost', `${process.env.REACT_APP_BASEHOST}`);
  return fetchUtils.fetchJson(url, options);
};




const dataProvider = (url=process.env.REACT_APP_API_ENDPOINT) => restProvider(url, httpClient)

export default dataProvider;


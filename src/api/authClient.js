
import {
  validateToken,
  clearUserData,
  // refreshUserData,
  getToken,
  // checkAccessFor,
  rawFetchApi
} from '../helpers';


const fetchUserData = (token) => rawFetchApi("/me", token, (data) => Promise.resolve({token, data}))


const authProvider = {

  
  login: (params, redirectTo) => {

    const {token} = params
    /**
     * clear all old auth data
    */
    clearUserData();
    
    if(token && validateToken(token)){
      
      /**IMPORT!!! We use useLogoutSuccess hook in custom LogoutButton to clear context and localStorage data */
      return fetchUserData(token);
      /** */
    }

    return Promise.reject("api.errors.bad_token")
  },
  checkError: error => Promise.resolve(),
  /**IMPORTANT!!! ALWAYS ALLOW ACCESS TO RESOURCES */
  checkAuth: params => Promise.resolve(),
  /** */
  logout: () => {

    /**IMPORT!!! We use useLogoutSuccess hook in custom LogoutButton to clear context and localStorage data */
    clearUserData() 
    return Promise.resolve()
    /** */
  },
  getIdentity: () => fetchUserData(getToken()),
  
  // authorization
  getPermissions: params => Promise.resolve(getToken()),
};


export default authProvider
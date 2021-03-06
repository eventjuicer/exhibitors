

export const getKey = key => `${process.env.REACT_APP_BASEHOST}/${key}`

export const lsGet = (key, ifNotFound = "") => {
    try {
      const data = localStorage.getItem(getKey(key))
      return data ? JSON.parse(data) : ifNotFound
    } catch (error) {
      return ifNotFound
    }
  }
  
  
  export const lsSet = (key, value) => localStorage.setItem(getKey(key), JSON.stringify(value))
  
  export const lsRem = (key) => localStorage.removeItem( getKey(key) )
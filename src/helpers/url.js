
import { isString } from "lodash"


export const fixApiPath = (path="", usePublic=false) => {

  if(!isString(path)){
    console.error("fixApiPath path error", path)
    return
  }
  path = path.trim()

  if(!/^http/.test(path)){

    if(path.charAt(0) !== "/"){
      path = `/${path}`
    }

    path = `${process.env.REACT_APP_API_ENDPOINT}${path}`

    if(usePublic){
      path = path.replace("restricted", `public/hosts/${process.env.REACT_APP_BASEHOST}`)
    }

  }

  return path
}



export const resolveAssetPath = (path) => {

    if(/^http/.test(path)){
      return path
    }
  
    if(path.charAt(0) === "/"){
      path = path.slice(1)
    }
    return `${process.env.PUBLIC_URL}/${path}`;
  }


  export const removeSlashes = (str = "") => str.replace(/^\/|\/$/g, '')

  export const getFullUrl = (str) => {
    const homepage = removeSlashes(`${process.env.REACT_APP_HOMEPAGE}`)
    return `${homepage}/${removeSlashes(str)}`
  }



export const addUrlParam = (url = "", param = "") => {

  if(param.indexOf("?")===0)
  {
    param = param.slice(1)
  }

  if(!param.length)
  {
    return url
  }

  return url.indexOf("?") > -1 ? `${url}&${param}` : `${url}?${param}`
}


import { httpClient } from "./httpClient";
import {fixApiPath} from '../helpers'


export const convertFileToBase64 =  ({file, source}) => new Promise((resolve, reject) => {
  
  const reader = new FileReader();
  reader.onload = () => resolve({
    [source]: reader.result
  });
  reader.onerror = reject;
  reader.readAsDataURL(file);

});


export const convertFilesToBase64 = (files) => Promise.all(files.map(convertFileToBase64))

const addUploadFeature = (dataProvider) => ({

  ...dataProvider,

  get: (endpoint, usePublicApi = false) => httpClient(fixApiPath(endpoint, usePublicApi)).then(({ json }) => ({
    data: json.data,
  })),

  update: (resource, params) => {

   //look for File in data

   const files = Object.keys(params.data).filter(source => params.data[source] instanceof File).map(source => ({
     file: params.data[source],
     source
   }))

   if(files.length){
    return convertFilesToBase64(files).then(encoded => {
      const flattened = encoded.reduce((pre, cur) => ({...pre, ...cur}), {});
      return dataProvider.update(resource, {...params, data: {...params.data, ...flattened}})
    })
   }
    return dataProvider.update(resource, params)
  },

  // upload: (files, data) => convertFilesToBase64(files).then(encodedFiles => dataProvider.create("upload", {data:{
  //     files: encodedFiles.map(file => ({...file, ...data}))
  // }})),

        
})





export default addUploadFeature;


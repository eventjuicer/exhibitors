



const transform = (resource, params) => {


  switch (resource) {

    case 'representatives':
    case 'party':
    
      return {...params, data: {...params.data, 
        fields: params.data.profile
      }}
    break;

    default:

  }

  return params

}


 const transformRequestParams = (dataProvider) => ({

  ...dataProvider, 

  update: (resource, params) => {
    return dataProvider.update(resource, transform(resource, params))
  },

  create: (resource, params) => {
    return dataProvider.create(resource, transform(resource, params))
  }

 })


 export default transformRequestParams
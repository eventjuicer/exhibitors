import {
  SPECIAL_MESSAGE_SHOW,
  RESOURCE_LIMIT_SHOW,
} from './types';


import {importReducer} from '../views/imports/redux/reducers';



const specialmessageReducer = (previousState = '', { type, msg }) => {
  if (type === SPECIAL_MESSAGE_SHOW) {
    return msg;
  }

  return previousState;
};



const resourceLimitReducer = (previousState = {}, payload) => {
  switch (payload.type) {
    case RESOURCE_LIMIT_SHOW:
      return { ...previousState, [payload.resource]: payload.limit };
    

    default:
      return previousState;
  }
};




export default {
  import: importReducer,
  specialmessage: specialmessageReducer,
  resourcelimit: resourceLimitReducer
};

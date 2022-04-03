import {
  SET_USER,
  SPECIAL_MESSAGE_SHOW,
  RESOURCE_LIMIT_SHOW,
  PURCHASE_CREATE,
  PURCHASE_UPDATE
} from './types';

import { CREATE, UPDATE } from 'react-admin';

export const purchaseCreate = (data, basePath) => ({
    type: PURCHASE_CREATE,
    payload: { data },
    meta: { resource: 'purchases', fetch: CREATE, cancelPrevious: false },
});

// export const purchaseDelete = (id, previousData, basePath) => ({
//   type: PURCHASE_DELETE,
//   payload: { id, previousData, basePath},
//   meta: { resource: 'purchases', fetch: DELETE, cancelPrevious: false },
// });

export const purchaseUpdate = (id, data, previousData = {}, basePath = "") => ({
  type: PURCHASE_UPDATE,
  payload: { id, data, previousData, basePath},
  meta: { resource: 'purchases', fetch: UPDATE, cancelPrevious: false },
});


export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const setSpecialMessage = msg => ({
  type: SPECIAL_MESSAGE_SHOW,
  msg: msg
});



export const setResponseLimit = (resource, limit) => ({
  type: RESOURCE_LIMIT_SHOW,
  resource: resource,
  limit: limit
});


//https://github.com/marmelab/react-admin/blob/c15559c266d449ffc4e39563971822f2f9563bf7/src/actions/dataActions.js

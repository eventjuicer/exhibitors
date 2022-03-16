import { put, takeEvery, all } from 'redux-saga/effects';
//import { push } from 'react-router-redux';
import {
  CRUD_GET_LIST,
  CRUD_GET_LIST_SUCCESS,
  showNotification
} from 'react-admin';

//import { SPECIAL_MESSAGE_SHOW } from '../types';
import {
  setSpecialMessage as setSpecialMessageAction,
  setResponseLimit as setResponseLimitAction
} from '../actions';

function* handleLimits(data) {
  if ('meta' in data.payload && 'limit' in data.payload.meta) {
    yield put(
      setResponseLimitAction(data.meta.resource, data.payload.meta.limit)
    );
  }
}

function* resetSpecialMessage() {
  yield put(setSpecialMessageAction(''));
}

function* handleSpecialMessage(data) {
  if ('total' in data.payload && data.payload.total === 0) {
    //  yield put(setSpecialMessageAction(`resources.${data.meta.resource}`));
    yield put(showNotification(`resources.${data.meta.resource}.noresults`));
  }
}

export default function* saga() {
  yield all([
    takeEvery(CRUD_GET_LIST, resetSpecialMessage),

    takeEvery(CRUD_GET_LIST_SUCCESS, handleSpecialMessage),

    takeEvery(CRUD_GET_LIST_SUCCESS, handleLimits)
  ]);
}

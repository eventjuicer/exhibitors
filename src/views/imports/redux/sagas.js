

import { put, takeEvery, all } from 'redux-saga/effects';

import {
  CRUD_CREATE
} from 'react-admin';

import {
  resetImport
} from './actions';


function* handleResetImport(data) {
  if ('meta' in data && "resource" in data.meta && data.meta.resource === "imports")
  {
  yield put(resetImport());
  }
}

export default function* saga() {
  yield all([
    takeEvery(CRUD_CREATE, handleResetImport),
  ]);
}

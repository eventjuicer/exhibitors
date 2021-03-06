import React from 'react'
import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  CRUD_CREATE_SUCCESS,
  CRUD_UPDATE_SUCCESS,
  showNotification
} from 'react-admin';
import { push } from 'react-router-redux';
import get from 'lodash/get'



import { refreshUserData } from '../../helpers';

import {
  PURCHASE_CREATE_SUCCESS,
  PURCHASE_UPDATE_SUCCESS
} from '../types'

import {showModal} from '../actions';
import slack from '../../services/slack';


function* handleSlackNotification({meta, payload, requestPayload}) {

  const {resource} = meta

  try {
    const userData = yield call(slack, `Updated *${resource}*`);
    // Instructing middleware to dispatch corresponding action.
    yield put({
      type: 'SLACK_NOTIFICATION_STATUS',
      userData
    });
  } catch (error) {
    console.log("check slack config!")
  }
  
}

function* onResourceUpdate(data) {
  switch(get(data, "meta.resource")){
    case "companydata":
      yield call(refreshUserData);
    break
    default:
  }
}



export default function* saga() {
  yield all([

    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate),
//    takeEvery(CRUD_CREATE_SUCCESS, handleSlackNotification),
 //   takeEvery(CRUD_UPDATE_SUCCESS, handleSlackNotification)
  ]);
}

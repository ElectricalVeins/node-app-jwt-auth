import { takeLatest, takeEvery } from 'redux-saga/effects'
import { loginUserSaga }         from "./authSaga";
import { ACTION_TYPES }          from "../actions/actionTypes";

export default function* rootSaga() {
  yield takeLatest( ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga )

}
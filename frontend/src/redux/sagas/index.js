import { takeLatest, takeEvery }      from 'redux-saga/effects'
import { loginUserSaga, setUserSaga } from "./authSaga";
import { ACTION_TYPES }               from "../actions/actionTypes";

export default function* rootSaga() {
  yield takeLatest( ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga );
  yield takeEvery( ACTION_TYPES.APP_SET_USER, setUserSaga );
}
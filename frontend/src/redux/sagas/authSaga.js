import { put }          from 'redux-saga/effects'
import { loginUser }    from "../../api/auth";
import { ACTION_TYPES } from "../actions/actionTypes";


export function* loginUserSaga( action ) {
  console.log( 'saga' )
  try {
    const { data: { user } } = yield loginUser( action.data );
    yield put( {
      type: ACTION_TYPES.LOGIN_USER_SUCCESS,
      user,
    } )
  } catch ( e ) {
    yield put( {
      type: ACTION_TYPES.LOGIN_USER_ERROR,
      error: e,
    } )
  }
}
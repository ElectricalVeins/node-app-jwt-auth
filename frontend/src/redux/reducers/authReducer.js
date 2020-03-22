import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  error: null,
};

export default function ( state = initialState, action ) {
  console.log( 'reducer auth', state, action );
  switch ( action.type ) {

    case ACTION_TYPES.LOGIN_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case ACTION_TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      console.log( 'default reducer case' )
      return state

  }
}
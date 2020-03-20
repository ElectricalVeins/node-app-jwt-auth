const initialState = {
  isFetching: false,
  user: null,
  error: null,
};

export default function ( state = initialState, action ) {
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
      }
    case ACTION_TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state

  }
}
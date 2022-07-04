import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload[0],
        loading: false,
      };

    case CLEAR_USERS:
      return { ...state, users: [] };

    case SET_LOADING:
      return { ...state, loading: true };

    case SET_ALERT:
      return {
        ...state,
        alert: { message: action.payload.message, type: action.payload.type },
      };

    case REMOVE_ALERT:
      return { ...state, alert: { message: null, type: null } };

    default:
      return state;
  }
};

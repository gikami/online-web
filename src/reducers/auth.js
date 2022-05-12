import {
  AUTH_ERR_LOG_IN,
  AUTH_ERR_LOG_OUT,
  AUTH_LOGGED_IN,
  AUTH_LOGGING_IN,
  AUTH_LOGGING_OUT,
  AUTH_LOGOUT,
  AUTH_REG_IN,
  AUTH_RESTORE_IN,
  PROFILE_UPDATE
} from '../constants/auth';

const INITIAL_STATE = {
  user: null,
  token: null,
  loggingIn: false,
  loggingOut: false,
  errorMessageLogin: null,
  errorMessageReg: null,
  errorMessageLogout: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_LOGOUT: {
      return {
        ...INITIAL_STATE,
      };
    }

    case AUTH_LOGGING_IN: {
      return {
        ...state,
        errorMessageLogin: action.payload ? null : state.errorMessageLogin,
        errorMessageLogout: null,
        loggingIn: action.payload,
      };
    }
    case AUTH_REG_IN: {

      return {
        ...state,
        errorMessageReg: action.payload,
        errorMessageLogout: null,
        loggingIn: action.payload,
      };
    }
    case AUTH_RESTORE_IN: {

      return {
        ...state,
        errorMessageRestore: action.payload,
        errorMessageLogout: null,
        loggingIn: action.payload,
      };
    }

    case AUTH_LOGGING_OUT: {
      return {
        ...state,
        errorMessageLogout: action.payload ? null : state.errorMessageLogout,
        loggingOut: action.payload,
      };
    }
    case PROFILE_UPDATE: {
      let { user } = action.payload;
      return {
        ...state,
        user,
        errorMessageEdit: null,
        loggingIn: false,
      };
    }
    case AUTH_LOGGED_IN: {
      let { user, token } = action.payload;
      return {
        ...state,
        user,
        token,
        errorMessageLogin: null,
        loggingIn: false,
      };
    }

    case AUTH_ERR_LOG_IN: {
      return {
        ...state,
        loggingIn: false,
        errorMessageLogin: action.payload,
      };
    }

    case AUTH_ERR_LOG_OUT: {
      return {
        ...state,
        loggingOut: false,
        errorMessageLogout: action.payload,
      };
    }

    default:
      return state;
  }
}

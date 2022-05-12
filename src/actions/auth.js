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
} from "../constants/auth";
import { navigate } from "../api/navRef";
import { apiProfile } from "../api/apiProfile";

export const updateProfileData = (data) => ({
  type: PROFILE_UPDATE,
  payload: data,
});

export const loggingIn = (loggingIn) => ({
  type: AUTH_LOGGING_IN,
  payload: loggingIn
});

export const loggedIn = (data) => ({
  type: AUTH_LOGGED_IN,
  payload: data,
});

export const errorLogIn = (errorMessage) => ({
  type: AUTH_ERR_LOG_IN,
  payload: errorMessage,
});
export const getProfile = (userId) => (dispatch) => {
  apiProfile.getProfile(userId).then((res) => {
    dispatch(updateProfileData({ user: res.data.body }))
  }).catch((err) => {

  }).finally(() => {

  });
};

export const editProfile = (data, id) => (dispatch) => {
  apiProfile.editProfile(data, id).then((res) => {
    dispatch(updateProfileData({ user: res.data.body }))
  }).catch((err) => {

  }).finally(() => {

  });
};
export const login = (email, password) => (dispatch) => {
  dispatch(loggingIn(true));
  apiProfile.login(email, password).then((res) => {
    dispatch(loggedIn({
      user: res.data.body.user,
      token: res.data.body.token
    }));
    navigate('Profile', { updateData: true });
  }).catch((err) => {
    dispatch(errorLogIn('Неверный логин или пароль'));
  }).finally(() => {
    dispatch(loggingIn(false));
  });
};
export const errorRegIn = (errorMessage) => ({
  type: AUTH_REG_IN,
  payload: errorMessage,
});
export const reg = (data, step) => (dispatch) => {
  dispatch(loggingIn(true));
  apiProfile.reg(data, step).then(async (res) => {
    navigate('Reg', { step: step ? step : 0 });
  }).catch((err) => {
    if (err.data.code == 'VERIFY_CODE_EXISTS') {
      navigate('Reg', { step: step ? step : 0 });
    } else {
      let error = err.data.errors ? err.data.errors.errors[0].field + ': ' + err.data.errors.errors[0].message : err.data.message ? err.data.message : 'Произошла неизвестная ошибка, повторите попытку'
      dispatch(errorRegIn(error));
    }
  }).finally(() => {
    dispatch(loggingIn(false));
  });
};
export const errorRestoreIn = (errorMessage) => ({
  type: AUTH_RESTORE_IN,
  payload: errorMessage,
});
export const restorePassword = (data, step) => (dispatch) => {
  dispatch(loggingIn(true));
  apiProfile.restorePassword(data, step).then(async (res) => {
    if (res.data.status == 200 && step) {
      navigate('RestorePassword', { step });
    }
  }).catch((err) => {
    if (err.data.code == 'VERIFY_CODE_EXISTS') {
      navigate('RestorePassword', { step });
    } else {
      let error = err.data.errors ? err.data.errors.errors[0].field + ': ' + err.data.errors.errors[0].message : err.data.message ? err.data.message : 'Произошла неизвестная ошибка, повторите попытку'
      dispatch(errorRestoreIn(error));
    }
  }).finally(() => {
    dispatch(loggingIn(false));
  });
};
export const loggedOut = () => ({
  type: AUTH_LOGOUT,
});

export const loggingOut = (lOut) => ({
  type: AUTH_LOGGING_OUT,
  payload: lOut,
});

export const errorLogOut = (errorMessage) => ({
  type: AUTH_ERR_LOG_OUT,
  payload: errorMessage,
});

export const logout = () => async (dispatch) => {
  dispatch(loggingOut(true));
  await apiProfile.logout().then((res) => {
    dispatch(loggedOut());
  }).catch((err) => {
    dispatch(errorLogOut('Error logging out.'));
  }).finally(() => {
    dispatch(loggingOut(false));
  });
};

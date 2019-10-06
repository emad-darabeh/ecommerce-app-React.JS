import {
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from './user.types';

export const googleSignInStart = () => dispatch => {
  dispatch({
    type: GOOGLE_SIGN_IN_START
  });
};

export const emailSignInStart = (email, password) => dispatch => {
  dispatch({
    type: EMAIL_SIGN_IN_START,
    payload: { email, password }
  });
};

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const signUpStart = (email, password, additionalData) => dispatch => {
  dispatch({
    type: SIGN_UP_START,
    payload: { email, password, additionalData }
  });
};

export const signUpSuccess = (user, additionalData) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

export const checkUserSession = () => dispatch => {
  dispatch({
    type: CHECK_USER_SESSION
  });
};

export const signOutStart = () => dispatch => {
  dispatch({
    type: SIGN_OUT_START
  });
};

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

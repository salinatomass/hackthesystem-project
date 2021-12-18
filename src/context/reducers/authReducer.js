import { authActions } from '../actions/authActions';

const user = JSON.parse(localStorage.getItem('user')) || null; // ;

export const initialState = {
  isLoggedIn: Boolean(user),
  user,
  errorMessage: null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActions.AUTH_REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        errorMessage: null,
      };
    case authActions.AUTH_REGISTER__ERROR:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };

    case authActions.AUTH_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.AUTH_LOGIN__SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        errorMessage: null,
      };
    case authActions.AUTH_LOGIN__ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    case authActions.AUTH_LOGOUT:
      return { ...state };
  }
};

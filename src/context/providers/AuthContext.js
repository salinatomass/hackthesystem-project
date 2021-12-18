import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { login, register, profile } from '../../api/authApi';
import { initialState, authReducer } from '../reducers/authReducer';
import { authActions } from '../actions/authActions';

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('must be in an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async ({ email, password, username }) => {
    dispatch({ type: authActions.AUTH_REGISTER });
    try {
      const res = await register({ email, password, username });
      const user = res.data;

      localStorage.setItem('user', JSON.stringify(user));

      dispatch({
        type: authActions.AUTH_REGISTER_SUCCESS,
        payload: user,
      });

      return user;
    } catch (err) {
      const errorData = err.response.data;
      if (errorData) {
        dispatch({
          type: authActions.AUTH_REGISTER__ERROR,
          payload: errorData.errorMessage,
        });
      }
    }
  };

  const signin = async ({ username, password }) => {
    dispatch({ type: authActions.AUTH_LOGIN });
    try {
      const res = await login({ username, password });
      const { user } = res.data;

      localStorage.setItem('user', JSON.stringify(user));

      dispatch({
        type: authActions.AUTH_LOGIN__SUCCESS,
        payload: user,
      });

      return user;
    } catch (err) {
      const errorData = err.response.data;
      if (errorData) {
        dispatch({
          type: authActions.AUTH_LOGIN__ERROR,
          payload: errorData.message,
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signup, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

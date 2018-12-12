import { AUTHENTICATE } from './types';
import { USERNAME, PASSWORD } from '../constants/credentials';

export const authenticate = (authData) => dispatch => {
    if(authData.username === String(USERNAME))
    {
      if(authData.password === String(PASSWORD))
      {
        dispatch({
          type: AUTHENTICATE,
          payload: {
            authenticated: true,
            username: authData.username,
            password: authData.password
          },
          message: 'You have been authenticated.'  
        });
      }
      else
      {
        dispatch({
          type: AUTHENTICATE,
          payload: {
            authenticated: false,
            username: authData.username,
            password: ''
          },
          message: 'Incorrect password.'  
        });
      }
    }
    else
    {
      dispatch({
        type: AUTHENTICATE,
        payload: {
          authenticated: false,
          username: '',
          password: ''
        },
        message: 'Incorrect username.'
      });
    }
};
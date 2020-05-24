import { useReducer } from 'react';
import { initState, reducer } from '../Reducer/Reducer';
// LOGIN, LOGOUT

const UseFetch = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    state,
    login: userData => {
      dispatch({
        type: 'LOGIN',
        userData,
      });
    },
    logout: () => {
      dispatch({
        type: 'LOGOUT',
      });
    },
  };
};

export default UseFetch;

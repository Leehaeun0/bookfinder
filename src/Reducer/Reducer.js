import bookApi from '../Api/Api';
// getBestSeller, getRecommend, getNewBook, searchBook

export const initState = {
  login: false,
  user: {
    id: '',
    pw: '',
    name: '',
  },
  book: [],
  histoty: [],
  searchLog: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: true,
        user: action.userData,
      };
    case 'LOGOUT':
      return {
        ...state,
        login: false,
        user: initState.user,
      };
    default:
      return state;
  }
};

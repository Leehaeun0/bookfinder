export const initState = {
  login: false,
  user: {
    id: '',
    pw: '',
    name: '',
  },
  book: [],
  history: [{ page: '', data: [] }],
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
    case 'GETBOOK':
      return {
        ...state,
        book: action.books,
      };

    default:
      return state;
  }
};

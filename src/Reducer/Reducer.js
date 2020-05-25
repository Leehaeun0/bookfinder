export const initState = {
  login: false,
  user: {
    id: '',
    pw: '',
    name: '',
  },
  book: [],
  allBook: [],
  history: [{ page: '', data: [] }],
  searchLog: [],
  inputValue: '',
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
    case 'INPUT':
      return {
        ...state,
        inputValue: action.value,
      };
    case 'ALLBOOKS':
      return {
        ...state,
        allBook: action.allBook,
      };

    default:
      return state;
  }
};

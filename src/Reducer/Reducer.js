export const initState = {
  login: false,
  user: {
    id: '',
    pw: '',
    name: '',
  },
  book: [],
  allBook: [],
  history: [],
  searchLog: [],
  inputValue: '',
};
// history : [{ page: '', data: [] }]
// searchLog : [{ term: '', data: []}]

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
        history: [
          ...state.history,
          {
            page: action.location,
            data: action.books,
          },
        ],
      };
    case 'GET_HISTORY':
      return {
        ...state,
        book: action.books,
      };
    case 'SEARCH':
      return {
        ...state,
        book: action.books,
        searchLog: [
          ...state.searchLog,
          {
            term: action.term,
            data: action.books,
          },
        ],
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

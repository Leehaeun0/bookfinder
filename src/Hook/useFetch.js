import { useReducer, useRef } from 'react';
import bookApi from '../Api/Api';
import { initState, reducer } from '../Reducer/Reducer';
// reducer: LOGIN, LOGOUT, GETBOOK, GET_HISTORY, SEARCH

const userBD = [
  { id: 0, userId: 'haeun114', userPw: 'haeun114', name: 'haeun' },
  { id: 1, userId: 'chiwon00', userPw: 'chiwon00', name: 'chiwon' },
];
// LOGIN, LOGOUT
// getBestSeller, getRecommend, getNewBook, searchBook

const UseFetch = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const loginId = useRef();
  const loginPw = useRef();
  const loginSubmit = useRef();

  const login = userData => {
    dispatch({
      type: 'LOGIN',
      userData,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  // 로그인 관련
  // 로그인 버튼 활성화/비활성화 함수
  const loginSubmitActive = {
    active: () => {
      loginSubmit.current.classList.add('active');
    },
    inactive: () => {
      loginSubmit.current.classList.remove('active');
    },
  };
  // 로그인 체크 함수
  const checkLogin = (id, pw) => {
    console.log(userBD);
    if (!userBD.some(userData => userData.userId === id))
      return {
        loginCk: false,
        error: 'ID',
        data: {},
      };
    if (!userBD.some(userData => userData.userPw === pw))
      return {
        loginCk: false,
        error: 'PW',
        data: {},
      };
    return {
      loginCk: true,
      error: '',
      userData: userBD.find(userData => userData.userId === id),
    };
  };
  // 로그인 에러 텍스트 함수
  const errorText = {
    add: target => target.current.nextElementSibling.classList.add('active'),
    remove: target =>
      target.current.nextElementSibling.classList.remove('active'),
  };
  // 로그인 에러 출력 함수
  const errorLogin = target => {
    loginSubmitActive.inactive();
    loginPw.current.value = '';
    if (target === 'ID') {
      loginId.current.value = '';
      errorText.add(loginId);
      loginId.current.focus();
      return;
    }
    errorText.add(loginPw);
    loginPw.current.focus();
  };

  // 페이지 로드 관련
  const setBestSeller = async () => {
    let data;
    if (state.history.some(log => log.page === '/')) {
      data = state.history.find(log => log.page === '/').data;
      dispatch({ type: 'GET_HISTORY', books: data });
      return;
    }
    data = await bookApi.getBestSeller();
    dispatch({ type: 'GETBOOK', books: data.item, location: '/' });
  };

  const setRecommend = async () => {
    let data;
    if (state.history.some(log => log.page === '/recommend')) {
      data = state.history.find(log => log.page === '/recommend').data;
      dispatch({ type: 'GET_HISTORY', books: data });
      return;
    }
    data = await bookApi.getRecommend();
    dispatch({ type: 'GETBOOK', books: data.item, location: '/recommend' });
  };

  const setNew = async () => {
    let data;
    if (state.history.some(log => log.page === '/new')) {
      data = state.history.find(log => log.page === '/new').data;
      dispatch({ type: 'GET_HISTORY', books: data });
      return;
    }
    data = await bookApi.getNewBook();
    dispatch({ type: 'GETBOOK', books: data.item, location: '/new' });
  };

  const searchBook = async value => {
    let data;
    if (state.searchLog.some(log => log.term === value)) {
      data = state.searchLog.find(log => log.term === value).data;
      dispatch({ type: 'GET_HISTORY', books: data });
      return;
    }
    data = await bookApi.searchBook(value);
    dispatch({ type: 'SEARCH', books: data.item, term: value });
  };

  // 이벤트
  // 로그인
  // 로그인 인풋 이벤트
  const loginInputEv = ({ target }) => {
    loginId.current.value && loginPw.current.value
      ? loginSubmitActive.active()
      : loginSubmitActive.inactive();
    if (target.value.length > 1) return;
    switch (target.name) {
      case 'ID': {
        errorText.remove(loginId);
      }
      case 'PW': {
        errorText.remove(loginPw);
      }
      default: {
      }
    }
  };
  // 로그인 버튼 이벤트
  const loginBtEv = (target, history) => {
    if (![...target.classList].some(list => list === 'active')) return;
    const { loginCk, error, userData } = checkLogin(
      loginId.current.value,
      loginPw.current.value,
    );
    if (!loginCk) {
      errorLogin(error);
      return;
    }
    login(userData);
    history.goBack();
  };

  return {
    state,
    logout,
    loginId,
    loginPw,
    loginSubmit,
    loginInputEv,
    loginBtEv,
    setBestSeller,
    setRecommend,
    setNew,
    searchBook,
  };
};

export default UseFetch;

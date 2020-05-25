import React, { useContext } from 'react';
import { BookContext } from '../Context/Context';

const LoginSec = ({ history }) => {
  const { loginId, loginPw, loginSubmit, loginInputEv, loginBtEv } = useContext(
    BookContext,
  );
  return (
    <section className="LoginWindow">
      <div>
        <input
          type="text"
          name="ID"
          placeholder="아이디"
          ref={loginId}
          onChange={loginInputEv}
        />
        <span>일치하는 아이디가 없습니다.</span>
      </div>
      <div>
        <input
          type="password"
          name="PW"
          placeholder="비밀번호"
          ref={loginPw}
          onChange={loginInputEv}
        />
        <span>비밀번호가 일치하지 않습니다.</span>
      </div>
      <button
        type="button"
        ref={loginSubmit}
        onClick={({ target }) => {
          loginBtEv(target, history);
        }}
      >
        로그인
      </button>
    </section>
  );
};

export default LoginSec;

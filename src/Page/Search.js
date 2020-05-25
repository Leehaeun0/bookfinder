import React, { useContext } from 'react';
import BookList from '../Components/BookList';
import { BookContext } from '../Context/Context';

const Search = () => {
  const { state, searchBook } = useContext(BookContext);

  console.log(state.book.length);

  if (!state.searchLog.length)
    return <span className="serch-msg"> 검색어를 입력하세요.</span>;

  return (
    <>
      <div className="history-wrap">
        <span className="recent">최근 검색어 </span>
        <ul className="history">
          {state.searchLog.map(v => (
            <li key={v.term}>
              <button
                type="button"
                onClick={e => searchBook(e.target.textContent)}
              >
                {v.term}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {state.book.length ? (
        <BookList />
      ) : (
        <span className="serch-msg"> 검색결과가 없습니다.</span>
      )}
    </>
  );
};

export default Search;

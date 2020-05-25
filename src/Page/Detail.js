import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../Context/Context';

const Detail = ({ history }) => {
  const { state, getAllBooks } = useContext(BookContext);
  const pageNumber = useParams();
  const id = +pageNumber.content_id;

  useEffect(() => {
    getAllBooks();
  }, []);

  if (!state.allBook.length) return '';
  // const data = state.book.find(v => v.itemId === id);
  const data = state.allBook.find(v => v.itemId === id);

  const date = num => {
    return `${num.slice(0, 4)}년 ${num.slice(4, 6)}월 ${num.slice(6, 8)}일`;
  };

  return (
    <div className="detail-wrap">
      <img src={data.coverLargeUrl} alt={data.title} />
      <span className="tit">{data.title}</span>
      <br />
      <span className="date">{date(data.pubDate)}</span>
      <br />
      <span className="info">{data.description}</span>
      <button type="button" onClick={() => history.goBack()}>
        뒤로가기
      </button>
    </div>
  );
};

export default Detail;

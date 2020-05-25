import React from 'react';
import { Route } from 'react-router-dom';
import BestSeller from '../Page/BestSeller';
import Recommend from '../Page/Recommend';
import New from '../Page/New';
import Search from '../Page/Search';
import Detail from '../Page/Detail';

const MainRouter = () => {
  return (
    <>
      <Route exact path="/" component={BestSeller} />
      <Route exact path="/recommend" component={Recommend} />
      <Route exact path="/new" component={New} />
      <Route exact path="/search" component={Search} />
      <Route path="/detail/:content_id" component={Detail} />
      {/* <Route
        render={({ location }) => (
          <div>
            <h2 className="not">이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      /> */}
    </>
  );
};

export default MainRouter;

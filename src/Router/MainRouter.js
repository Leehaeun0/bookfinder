import React from 'react';
import { Route } from 'react-router-dom';
import BestSeller from '../Page/BestSeller';
import Recommend from '../Page/Recommend';
import New from '../Page/New';
import Search from '../Page/Search';

const MainRouter = () => {
  return (
    <>
      <Route path="/" exact component={BestSeller} />
      <Route path="/recommend" component={Recommend} />
      <Route path="/new" component={New} />
      <Route path="/search" component={Search} />
    </>
  );
};

export default MainRouter;

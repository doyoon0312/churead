import React from 'react';
import FeedItem from '../components/FeedItem';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';

const Home = () => {
  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      <Header />
      <main className="h-full overflow-auto">
        <div>
          <ul>
            <FeedItem />
            <FeedItem />
            <FeedItem />
          </ul>
        </div>
      </main>
      <Nav />
    </div>
  );
};

export default Home;

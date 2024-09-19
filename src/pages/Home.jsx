import React from 'react';
import FeedItem from '../components/FeedItem';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
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

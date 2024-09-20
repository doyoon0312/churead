import React, { useState } from 'react';
import FeedItem from '../components/FeedItem';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import { initiaFeedList } from '../data/response';

const Home = () => {
  const [feedList, setFeedList] = useState(initiaFeedList);

  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      <Header />
      <main className="h-full overflow-auto">
        <div>
          <ul>
            {feedList.map((feed) => (
              <FeedItem key={feed.id} data={feed} />
            ))}
          </ul>
        </div>
      </main>
      <Nav />
    </div>
  );
};

export default Home;

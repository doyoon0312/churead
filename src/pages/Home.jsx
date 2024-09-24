import React, { useEffect, useState } from 'react';
import FeedItem from '../components/FeedItem';
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import { initiaFeedList } from '../data/response';

const Home = ({ churead }) => {
  const [feedList, setFeedList] = useState(initiaFeedList);

  const handleDelete = (selectedItem) => {
    const filterList = feedList.filter((item) => item.id !== selectedItem.id);
    setFeedList(filterList);
  };

  useEffect(() => {
    if (!churead) return;
    const newFeed = {
      id: feedList.length + 1,
      userName: 'anonymois',
      userProfileImage:
        'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      churead: churead,
      likeCount: 38,
    };
    setFeedList([newFeed, ...feedList]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      <Header />
      <main className="h-full overflow-auto">
        <div>
          <ul>
            {feedList.map((feed) => (
              <FeedItem key={feed.id} data={feed} onDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </main>
      <Nav />
    </div>
  );
};

export default Home;

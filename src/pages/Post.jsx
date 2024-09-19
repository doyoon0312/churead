import React from 'react';
import { Link } from 'react-router-dom';
import PostInput from '../components/PostInput';

const Post = () => {
  return (
    <div>
      <header>
        <div>
          <Link>취소</Link>
          <h3>새로운 스레드</h3>
        </div>
      </header>
      <main>
        <div>
          <form id="post">
            <PostInput />
            <div>
              <p>누구에게나 답글 및 인용 허용</p>
              <button>게시</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Post;

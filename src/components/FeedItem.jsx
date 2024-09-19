import React from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const FeedItem = () => {
  return (
    <li>
      <div>
        {/* 프로필 이미지 영역 */}
        <div>
          <img src="./images/chutzrit.svg" alt="chutzrit" />
        </div>
        {/* 프로필 이미지 영역 끝 */}
        {/* 콘텐츠 영역 */}
        <div>
          <div>
            <span>chutzrit</span>
            {/* 수정, 삭제 버튼 작성하기 */}
            <div>
              <button type="button">
                <FaPen />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </div>
          </div>
          {/* 수정, 삭제 버튼 작성 완료 */}
          <p>
            The subway is not fancy—in fact, riding it can suck with rat, smells
            and all lol—but there’ll never be anything more iconic? and
            effective for getting around the city, especially during NYFW.
          </p>
          {/* 좋아요 영역 */}
          <div>
            <button>
              <FaHeart /> <span>5</span>
            </button>
          </div>
          {/* 좋아요 영역 완료 */}
        </div>
        {/* 콘텐츠 영역 끝 */}
      </div>
    </li>
  );
};

export default FeedItem;

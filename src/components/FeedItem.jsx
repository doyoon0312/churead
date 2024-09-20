import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const FeedItem = ({ data }) => {
  const { userName, userProfileImage, churead, likeCount } = data;

  return (
    <li className="border-t border-churead-gray-300 border-opacity-15 px-6 py-3">
      <div className="flex items-start gap-3">
        {/* 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src={userProfileImage} alt={userName} />
        </div>
        {/* 프로필 이미지 영역 끝 */}
        {/* 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">{userName}</span>
            {/* 수정, 삭제 버튼 작성하기 */}
            <div className="ml-auto flex gap-1">
              <button type="button" className="max-w-6 p-1">
                <FaPen />
              </button>
              <button type="button" className="max-w-6 p-1">
                <FaTrashAlt />
              </button>
            </div>
          </div>
          {/* 수정, 삭제 버튼 작성 완료 */}
          <p className="pt-1">{churead}</p>
          {/* 좋아요 영역 */}
          <div className="flex items-center">
            <button type="button" className="text-churead-gray-400">
              <FaHeart />
            </button>
            <span className="ml-2 flex gap-1">{likeCount}</span>
          </div>
          {/* 좋아요 영역 완료 */}
        </div>
        {/* 콘텐츠 영역 끝 */}
      </div>
    </li>
  );
};

export default FeedItem;

import React from 'react';

const PostInput = () => {
  return (
    <div>
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
          </div>
          <div>
            <textarea rows={4} placeholder="문구를 작성하세요." />
          </div>
        </div>
        {/* 콘텐츠 영역 끝 */}
      </div>
    </div>
  );
};

export default PostInput;

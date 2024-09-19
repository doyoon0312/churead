import React from 'react';

const HomeDetail = ({ name, detail }) => {
  return (
    <div className="flex justify-center">
      <img src={`./images/${name}.svg`} alt={name} />
      <div>
        <div>
          <strong>{name}</strong>
        </div>
        <span>{detail}</span>
      </div>
    </div>
  );
};

export default HomeDetail;

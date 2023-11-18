import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader__box">
      <div className="loader" data-testid="loader"></div>
    </div>
  );
};

export default Loader;

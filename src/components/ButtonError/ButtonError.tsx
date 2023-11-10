import React from 'react';
import { useState, useEffect } from 'react';

const ButtonError: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  const clickButtonError = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('Oops!!!');
    }
  });

  return (
    <button className="button__error" onClick={clickButtonError}>
      Error
    </button>
  );
};

export default ButtonError;

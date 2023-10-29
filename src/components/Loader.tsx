import React from 'react';

type Props = Record<string, never>;

class ButtonError extends React.Component<Props, never> {
  render() {
    return (
      <div className="loader__box">
        <div className="loader"></div>
      </div>
    );
  }
}

export default ButtonError;

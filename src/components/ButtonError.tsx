import React from 'react';

interface ButtonErrorProps {
  clickButtonError: () => void;
}

class ButtonError extends React.Component<ButtonErrorProps, never> {
  constructor(props: ButtonErrorProps) {
    super(props);
  }

  render() {
    return (
      <button className="button__error" onClick={this.props.clickButtonError}>
        Error
      </button>
    );
  }
}

export default ButtonError;

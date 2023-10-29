import React from 'react';

type Props = Record<string, never>;

interface State {
  hasError: boolean;
}

class ButtonError extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  clickButtonError = () => {
    this.setState({ hasError: true });
  };

  componentDidUpdate() {
    if (this.state.hasError) {
      throw new Error('Oops!!!');
    }
  }
  render() {
    return (
      <button className="button__error" onClick={this.clickButtonError}>
        Error
      </button>
    );
  }
}

export default ButtonError;

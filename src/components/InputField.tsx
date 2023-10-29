import React from 'react';
import './styles.css';

interface Props {
  setInfo: React.Dispatch<React.SetStateAction<{ dataInput: string }>>;
  handlerAdd: (e: React.FormEvent) => void;
}

interface State {
  dataInput: string;
}

class InputField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataInput: '',
    };
  }

  render() {
    return (
      <form className="input" onSubmit={(e) => this.props.handlerAdd(e)}>
        <input
          type="input"
          placeholder="Enter a name..."
          className="input__box"
          onChange={(e) =>
            this.props.setInfo({ dataInput: e.target.value.trim() })
          }
        />
        <button className="input_submit" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default InputField;

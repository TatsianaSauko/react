import React from 'react';
import './styles.css';

interface Props {
  dataInput: string;
  setInfo: React.Dispatch<React.SetStateAction<{ dataInput: string }>>;
  handlerAdd: (e: React.FormEvent) => void;
}

class InputField extends React.Component<Props, never> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <form className="input" onSubmit={(e) => this.props.handlerAdd(e)}>
        <input
          type="input"
          value={this.props.dataInput}
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

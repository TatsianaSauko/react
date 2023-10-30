import React from 'react';
import './styles.css';

interface Props {
  dataInput: string;
  setDataInput: React.Dispatch<React.SetStateAction<string>>;
  handlerAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  dataInput,
  setDataInput,
  handlerAdd,
}) => {
  return (
    <form className="input" onSubmit={(e) => handlerAdd(e)}>
      <input
        type="input"
        value={dataInput}
        placeholder="Enter a name..."
        className="input__box"
        onChange={(e) => setDataInput(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputField;

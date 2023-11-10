import React, { useContext } from 'react';
import { SearchContext } from '../../pages/MainPage/MainPage';

interface Props {
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ handleAdd }) => {
  const { dataInput, setDataInput } = useContext(SearchContext);
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
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

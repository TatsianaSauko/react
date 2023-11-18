import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

const InputField: React.FC = () => {
  const { dataInput } = useAppSelector((state) => state.anime);
  const { changeDataInput } = useActions();
  const [input, setInput] = useState<string>(dataInput);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    changeDataInput(input.trim());
  };

  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        value={input}
        placeholder="Enter a name..."
        className="input__box"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputField;

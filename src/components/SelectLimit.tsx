import React from 'react';
interface Props {
  value: number;
  // addLimit: React.Dispatch<React.SetStateAction<number>>;
  changeLimit: (data: number) => void;
}

const SelectLimit: React.FC<Props> = ({ value, changeLimit }) => {
  return (
    <div className="select_block">
      <div>Show cards: </div>
      <select
        value={value}
        onChange={(e) => changeLimit(Number(e.target.value))}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="25">25</option>
      </select>
    </div>
  );
};

export default SelectLimit;

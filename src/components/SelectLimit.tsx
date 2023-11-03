import React from 'react';
interface Props {
  value: number;
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
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="5">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </div>
  );
};

export default SelectLimit;

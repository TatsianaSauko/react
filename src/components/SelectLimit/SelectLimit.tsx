import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

const SelectLimit: React.FC = () => {
  const { limit } = useAppSelector((state) => state.anime);
  const { changeLimit, changePage } = useActions();

  const clickLimit = (data: number) => {
    changeLimit(data);
    changePage(1);
  };
  return (
    <div className="select_block">
      <div>Show cards: </div>
      <select
        value={limit}
        onChange={(e) => clickLimit(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </div>
  );
};

export default SelectLimit;

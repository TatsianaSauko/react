import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectLimit from '../components/SelectLimit';

describe('SelectLimit', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <SelectLimit value={5} changeLimit={() => {}} />
    );
    expect(getByText('Show cards:')).toBeInTheDocument();
  });

  it('calls changeLimit when select value changes', () => {
    const changeLimit = jest.fn();
    const { getByDisplayValue } = render(
      <SelectLimit value={5} changeLimit={changeLimit} />
    );
    fireEvent.change(getByDisplayValue('5'), { target: { value: '10' } });
    expect(changeLimit).toHaveBeenCalledWith(10);
  });
});

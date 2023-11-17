// import { expect, it, describe, vi } from 'vitest';
// import { render, fireEvent } from '@testing-library/react';
// import SelectLimit from './SelectLimit';

// describe('SelectLimit', () => {
//   it('should render without crashing', () => {
//   const { getByText } = render(
//     <SelectLimit />
//   );
//   expect(getByText('5')).toBeInTheDocument();
// });
// it('should call changeLimit with the correct value when an option is selected', () => {
//   const changeLimit = vi.fn();
//   const { getByRole } = render(
//     <SelectLimit />
//   );
//   const select = getByRole('combobox');
//   fireEvent.change(select, { target: { value: '15' } });
//   expect(changeLimit).toHaveBeenCalledTimes(1);
//   expect(changeLimit).toHaveBeenCalledWith(15);
//   });
// });

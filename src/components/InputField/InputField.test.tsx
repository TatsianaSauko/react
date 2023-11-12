import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

describe('InputField', () => {
  it('calls handleAdd when submitted', async () => {
    const handleAddMock = vi.fn();
    const { getByRole, getByPlaceholderText } = render(
      <InputField handleAdd={handleAddMock} />
    );
    const input = getByPlaceholderText('Enter a name...');
    const button = getByRole('button');
    await userEvent.type(input, 'John Doe');
    await fireEvent.submit(button);
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

describe('InputField', () => {
  it('calls handleAdd when submitted', async () => {
    const handleAddMock = vi.fn();
    render(<InputField handleAdd={handleAddMock} />);
    const input = screen.getByPlaceholderText('Enter a name...');
    const submitButton = screen.getByText('Search');
    await userEvent.type(input, 'John Doe');
    await userEvent.click(submitButton);
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });
});

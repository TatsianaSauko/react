import { expect, it, describe, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ButtonError from './ButtonError';

describe('ButtonError', () => {
  it('should throw an error when clicked', () => {
    const { getByRole } = render(<ButtonError />);
    const button = getByRole('button', { name: /error/i });

    const spy = vi.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    expect(() => {
      fireEvent.click(button);
    }).toThrow('Oops!!!');

    spy.mockRestore();
  });
});

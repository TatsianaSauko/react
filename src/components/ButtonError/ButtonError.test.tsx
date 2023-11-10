import { expect, it, describe } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ButtonError from './ButtonError';

describe('ButtonError', () => {
  it('should throw an error when clicked', () => {
    const { getByRole } = render(<ButtonError />);
    const button = getByRole('button', { name: /error/i });
    expect(() => {
      fireEvent.click(button);
    }).toThrow('Oops!!!');
  });
});

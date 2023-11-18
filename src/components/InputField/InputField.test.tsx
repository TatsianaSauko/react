import { describe, it, expect } from 'vitest';
import InputField from './InputField';
import { renderWithProviders } from '../../utils/test-utils';

describe('InputField', () => {
  it('should render without crashing', async () => {
    const { getByRole, getByPlaceholderText } = renderWithProviders(
      <InputField />
    );
    const input = await getByPlaceholderText('Enter a name...');
    const button = await getByRole('button');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

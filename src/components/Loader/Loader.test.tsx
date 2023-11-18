import { screen } from '@testing-library/react';
import Loader from './Loader';
import { renderWithProviders } from '../../utils/test-utils';

test('renders Loader component', () => {
  renderWithProviders(<Loader />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CitySearch from './CitySearch';

test('calls onSearch with the correct city name', () => {
  const handleSearch = jest.fn();
  render(<CitySearch onSearch={handleSearch} />);

  const input = screen.getByPlaceholderText('Enter city name');
  const button = screen.getByText('Search');

  fireEvent.change(input, { target: { value: 'São Paulo' } });
  fireEvent.click(button);

  expect(handleSearch).toHaveBeenCalledWith('São Paulo');
});

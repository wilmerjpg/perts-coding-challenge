import { render, screen } from '@testing-library/react';
import React from 'react';
import Toggle from '.';

test('Test with active toogle', () => {
  render(<Toggle isChecked handleChange={() => {}} />);
  const element = screen.getByText('Manager');

  expect(element).toBeInTheDocument();
});

test('Test with not active toogle', () => {
  render(<Toggle isChecked={false} handleChange={() => {}} />);
  const element = screen.getByText('Member');

  expect(element).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders to Nav', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const navText = screen.getByText('Space Travelers Hub');
  expect(navText).toMatchSnapshot();
});

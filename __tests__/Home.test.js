import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home';

describe('Home Component...', () => {
  test('...renders correctly,', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    getByText('USGS All Earthquakes, Past Hour');
  });
});

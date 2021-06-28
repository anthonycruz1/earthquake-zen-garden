import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../src/components/Nav';
import DataContext from '../src/contexts/DataContext';
import earthquakeData from '../src/data.json';

describe('Nav Component...', () => {
  test('...renders correctly,', () => {
    const { getByText } = render(
      <DataContext.Provider value={earthquakeData}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </DataContext.Provider>
    );
    getByText('Earthquake Zen Garden');
  });
});

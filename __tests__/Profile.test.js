import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DataContext from '../src/contexts/DataContext';
import earthquakeData from '../src/data.json';
import Profile from '../src/pages/Profile';

describe('Profile Component...', () => {
  test('...renders correctly,', () => {
    const { getByText } = render(
      <DataContext.Provider value={earthquakeData}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </DataContext.Provider>
    );
    getByText('First name');
    getByText('Last name');
    getByText('Bio');
  });
});

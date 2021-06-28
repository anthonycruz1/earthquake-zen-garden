import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/App';
import DataContext from '../src/contexts/DataContext';
import earthquakeData from '../src/data.json';

describe('Earthquake component...', () => {
  test('...renders correctly', () => {
    const { getByText } = render(
      <DataContext.Provider value={earthquakeData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContext.Provider>
    );

    fireEvent.click(getByText('M 1.2 - 3km ENE of The Geysers, CA'));
    getByText('Title');
  });
});

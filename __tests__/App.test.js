import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/components/App';
import DataContext from '../src/contexts/DataContext';
import earthquakeData from '../src/data.json';

describe('App Component...', () => {
  test('...renders Nav component,', () => {
    const { getByText } = render(
      <DataContext.Provider value={earthquakeData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContext.Provider>
    );
    getByText('Earthquake Zen Garden');
  });

  test('...renders Home component,', () => {
    const { getByText } = render(
      <DataContext.Provider value={earthquakeData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataContext.Provider>
    );
    getByText('USGS All Earthquakes, Past Hour');
  });
});

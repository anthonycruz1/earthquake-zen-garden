import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import DataContext from './contexts/DataContext';
import earthquakeData from './data.json';

ReactDOM.render(
  <DataContext.Provider value={earthquakeData}>
    <Router>
      <App />
    </Router>
  </DataContext.Provider>,
  document.getElementById('root')
);

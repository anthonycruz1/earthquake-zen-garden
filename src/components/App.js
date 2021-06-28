import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Earthquake from '../pages/Earthquake';
import '../styles/main.scss';

// Renders App component, a view of <Nav/> and Routes for <Home/>, <Earthquake/>, and <Profile/>. Default view is <Home/>.
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/earthquake/:id" component={Earthquake} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

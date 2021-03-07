import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/men' component={Men} />
        <Route path='/women' component={Women} />
        <Route path='/kids' component={Kids} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;

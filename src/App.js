import React from 'react';
import { Route } from 'react-router-dom'

import Content from './components/content-page/content-page'
import Header from './pages/header/header-component'
import HomePage from './pages/homepage/homepage'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/' component={HomePage}  />
      <Route path='/content' component={Content} />
    </div>
  );
}

export default App;

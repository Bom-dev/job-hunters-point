import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Account from './components/Account';
import Application from './components/Application';
import Archive from './components/Archive';
import Interview from './components/Interview'


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/applications' element={<Application />} />
          <Route path='/archives' element={<Archive />} />
          <Route path='/interviews' element={<Interview />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;

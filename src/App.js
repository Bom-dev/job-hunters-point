import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Nav from './components/Nav';
import Account from './components/Account';
import Application from './components/Application';
import Archive from './components/Archive';
import Interview from './components/Interview'
import Study from './components/Study';


function App() {

  useEffect(() => {
    getAllUser()
  }, [])

  async function getAllUser() {
    try {
      const r = await axios.get(`https://job-hunters-point.herokuapp.com/users/`)
      console.log(r.data)
    } catch (e) {
      console.error(e)
    }
  }

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
          <Route path='/studies' element={<Study />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;

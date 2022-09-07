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


function App() {

  useEffect(() => {
    getAllUser()
  }, [])

  // const getAllUser = () => {
  //   axios.get(`https://job-hunters-point.herokuapp.com/users/`)
  //   .then((r) => {
  //       console.log(r.data)
  //   })
  //   .catch(e => {
  //       console.log(e)
  //   })
  // }

  const getAllUser = () => {
    axios({
      method: 'get',
      url: `https://job-hunters-point.herokuapp.com/users/`,
      headers: {
        'Access-Control-Allow-Origin': 'https://localhost:3000',
        'Access-Control-Allow-Headers': 'origin',
        'Access-Control-Allow-Credentials': true,
        crossorigin: true,
      }
    }).then(r => {
      console.log(r)
    }).catch(e => {
      console.log(e)
    })
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
        </Routes>
      </main>
    </div>
  );
}

export default App;

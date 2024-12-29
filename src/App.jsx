import {Routes, Route} from 'react-router-dom'
import './App.css'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Income from './pages/Income'
import Savings from './pages/Savings'
import Tracker from './pages/Tracker'
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


function App() {

  useEffect(() => {
    const user = localStorage.getItem('InUser')
    if(user){
      InUser(true)
    }
  }, [])
  const {InUser} = useContext(UserContext)

  return (
    <>
    <Routes>
        <Route path="/" element={ InUser? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/income" element={<Income />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </>
  );
}

export default App

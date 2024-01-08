/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

// import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import './index.scss';
import Page from "./Pages/Pages";
import Shorts from './Pages/Shorts.jsx';
import Subscription from './Pages/Subscription.jsx';
import Profile from './Pages/Profile.jsx';

function App() {

  return (
    <>
       <Link />
      <Routes  >
        <Route index path="/" element = {<Page />}/>
        <Route  path="/shorts" element = {<Shorts />}/>
        <Route  path="/subscription" element = {<Subscription />}/>
        <Route  path="/profile" element = {< Profile />}/>
        
        </Routes>
       
       </>
  )
}

export default App

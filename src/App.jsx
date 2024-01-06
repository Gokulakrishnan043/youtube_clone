/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.scss';
import Page from "./Pages/Pages";
 import Sidebar from "./Components/sidebar1/sidebar";
 import Topbar from "./Components/topbar1/topbar";
 import Content from "./Components/Content1/Content";
function App() {

  return (
    <>
       <Page />
       <div className='d-flex'>
       <Sidebar />
       <Content />
        </div>  
      
       </>
  )
}

export default App

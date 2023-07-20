import React from 'react';
import Home from './home/Home';
import { Route,  Routes, Navigate } from 'react-router-dom';
import Login from './components/page/Login';
import Signup from './components/page/Signup';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const Redirect = ({path}) => {
//   useEffect(() => {
//     console.log("here")
//     redirect(path)
//   },[])
//   return null ;
// }

function App() {
  const authToken = localStorage.getItem('authToken');
  console.log({authToken})
  return (
  <>
    <Routes>
    {authToken ?
    ( 
      <>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </>
    )
      :
      (
      <>
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup'  element={<Signup />} />
      <Route path='*' element={<Navigate to="/Login" replace />} />
      </>
      )
      }
    </Routes>
    </>
  )
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import "./App.css"
import Search from './pages/Search';
import Profile from './pages/Profile';
import AddNote from './pages/AddNote';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addnewnote" element={<AddNote/>}/>
     
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

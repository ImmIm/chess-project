import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/navigation/Header';
import { Route, Routes } from 'react-router-dom';
import AppBackdrop from './components/ui/AppBackdrop';
import Login from './components/auth/Login';
import { useSelector } from 'react-redux';
import UserProfile from './components/userProfile/UserProfile';
import Settings from './components/userProfile/Settings';
import Homepage from './components/homepage/Homepage';
import Board from './components/board/Board';

function App() {
  const loginStatus = useSelector((state) => state.ui.loginBackdrop);
  return (
    <div className='App'>
      {ReactDOM.createPortal(
        <>{loginStatus ? <Login /> : null}</>,
        document.getElementById('modal-root')
      )}
      {ReactDOM.createPortal(
        <AppBackdrop></AppBackdrop>,
        document.getElementById('backdrop-root')
      )}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/board' element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;

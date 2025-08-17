import React from 'react';
import AboutUs from './components/AboutUs';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wallet from './components/Wallet';
import App from './App';
import MyProfile from './components/MyProfile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path="/wallet" element={<Wallet/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

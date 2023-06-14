import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavBar'
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasicExample/>
    <Header />    
    <App />
    
    
    
  </React.StrictMode>
);


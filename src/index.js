import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

reportWebVitals();

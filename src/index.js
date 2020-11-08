import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import productsData from './store'


ReactDOM.render(
  <React.StrictMode>
    <App productsData={productsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App rows={30} cols={50} speed={100} />,
  document.getElementById('root')
);

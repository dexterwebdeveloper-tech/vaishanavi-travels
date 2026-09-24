import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/all.min.css';
import './css/animate.css';
import './css/color.css';
import './css/datepickerboot.css';
import './css/main.css';
import './css/meanmenu.css';
import './css/nice-select.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

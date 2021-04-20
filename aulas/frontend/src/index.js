import React from 'react';
import ReactDOM from 'react-dom';   //integration of react with the navigator 
import App from './App';            // app.js

// Renderize on screen the APP
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



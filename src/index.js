import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mantén la ruta relativa para index.css
import App from './componentes/App'; // Esta es la ruta relativa correcta

import reportWebVitals from './reportWebVitals';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





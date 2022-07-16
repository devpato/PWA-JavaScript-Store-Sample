import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", ()=>{
      navigator.serviceWorker.register("sw.js").then(swRegistered => {
          console.log("[ServiceWorker**] - Registered");
      }).catch(error => console.log(error));
  });
}
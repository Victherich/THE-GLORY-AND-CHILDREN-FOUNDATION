import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { unregister } from './serviceWorker';
import ContextProvider from './components/Context';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>
  
);

// Unregister the service worker (disables offline support)
unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

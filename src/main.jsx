import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootElement = 
  document.getElementById('anusthan-root') || 
  document.getElementById('product-carousel-root') || 
  document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

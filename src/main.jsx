import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';     // ← Import your CSS here
import App from './App.jsx'; // ← Your App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

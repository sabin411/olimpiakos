import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// packages
import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

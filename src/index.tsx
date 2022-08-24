import GlobalStyle from '@Common/Style/GlobalStyle';
import { worker } from '@MSW/.';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();

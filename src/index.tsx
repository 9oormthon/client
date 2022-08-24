import GlobalStyle from '@Common/Style/GlobalStyle';
import { worker } from '@MSW/.';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

worker.start();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
);

reportWebVitals();

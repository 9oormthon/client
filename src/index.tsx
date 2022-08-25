import GlobalStyle from '@Common/Style/GlobalStyle';
import { worker } from '@MSW/.';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

worker.start();
// axios.defaults.baseURL = 'http://3.39.231.16:8080';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </RecoilRoot>,
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import { Router} from 'react-router';
import './index.css';
import App from './App';
//import main from './main'

// ReactDOM.render((
//   // <BrowserRouter>
//   // </BrowserRouter>

//   //<Router main={main} history={history} />

//   ), document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



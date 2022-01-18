import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/country/:country" element={<App/>} />
        <Route path="/india" element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

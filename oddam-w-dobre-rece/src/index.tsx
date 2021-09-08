import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPannel from './pages/LoginPage/LoginPannel';
import './scss/main.scss';

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPannel} />
      <Route path="/register" component={LoginPannel} />
    </>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

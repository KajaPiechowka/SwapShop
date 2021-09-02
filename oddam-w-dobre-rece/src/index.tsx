import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPannel/Login';
import './scss/main.scss';
import Register from './pages/LoginPannel/Register';

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

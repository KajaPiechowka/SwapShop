import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPannel from './pages/LoginPage/LoginPannel';
import './scss/main.scss';
import Firebase, { FirebaseContext } from './components/Firebase';

const App = () => (
  <BrowserRouter>
    <FirebaseContext.Provider value={new Firebase()}>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPannel} />
      <Route path="/register" component={LoginPannel} />
      <Route path="/logout" component={LoginPannel} />
    </FirebaseContext.Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

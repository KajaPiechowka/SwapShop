import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "./components/LoginPannel/Login";
import "./scss/main.scss";
import Register from "./components/LoginPannel/Register";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

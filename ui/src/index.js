import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './feed-app.css';


import App from './App';
import Homepage from './screens/Homepage/Homepage';
import Feed from './screens/Feed/Feed';
import NotFound from './screens/Errors/NotFound';
import Login from './screens/Auth/Login';
import Profile from './screens/profile/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Profile" component={Profile}/>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

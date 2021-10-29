import React ,{ useState,useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect ,NavLink} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import './feed-app.css';
import PrivateRoute from './screens/Auth/PrivateRoute';
import Dashboard from './screens/Auth/Dashboard';
import Login from './screens/Auth/Login';
import Homepage from './screens/Homepage/Homepage';
import Feed from './screens/Feed/Feed';
import NotFound from './screens/Errors/NotFound';

import Profile from './screens/profile/Profile';


function App() {
  return (
    <Router>
      <Switch>
       
        <Route path="/login" component={Login}> </Route>
       
        <PrivateRoute path="/feed" component={Feed}>
        </PrivateRoute>
        <Route exact path="/" component={Login}></Route>
        
      </Switch>
    </Router>
  );
}

export default App;

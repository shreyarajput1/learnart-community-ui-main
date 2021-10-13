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
import Story3 from './screens/story/Story3';
import Story4 from './screens/story/Story4';
import Story5 from './screens/story/Story5';
import Story2 from './screens/story/Story2';
import Profile from './screens/profile/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/feed" component={Feed} />
        
        <Route exact path="/Story2" component={Story2}/>
        <Route exact path="/Story3" component={Story3}/>
        <Route exact path="/Story4" component={Story4}/>
        <Route exact path="/Story5" component={Story5} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Profile" component={Profile}/>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

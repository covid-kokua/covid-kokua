import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AdditionalServices from '../pages/AdditionalServices';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/home" component={Home}/>
              <Route path="/additional" component={AdditionalServices}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;

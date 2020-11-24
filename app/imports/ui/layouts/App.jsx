import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Landing from '../pages/Landing';
import SocialServices from '../pages/SocialServices';
import StudentResources from '../pages/StudentResources';
import NotFound from '../pages/NotFound';
import AdditionalServices from '../pages/AdditionalServices';
import FinancialServices from '../pages/FinancialServices';
import EditFinancial from '../pages/EditFinancial';
import AddFinResource from '../pages/AddFinResource';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/additional" component={AdditionalServices}/>
              <Route path="/socialservices" component={SocialServices}/>
              <Route path="/financialservices" component={FinancialServices}/>
              <Route path="/editfinancial/:_id" component={EditFinancial}/>
              <Route path="/addfinancial" component={AddFinResource}/>
              <Route path="/studentresources" component={StudentResources}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;

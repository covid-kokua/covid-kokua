import React from 'react';
import PropTypes from 'prop-types';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Landing from '../pages/Landing';
import SocialServices from '../pages/SocialServices';
import StudentResources from '../pages/StudentResources';
import NotFound from '../pages/NotFound';
import AdditionalServices from '../pages/AdditionalServices';
import FAQ from '../pages/FAQ';
import FinancialServices from '../pages/FinancialServices';
import EditFinancial from '../pages/EditFinancial';
import AddFinResource from '../pages/AddFinResource';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="back">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/additional" component={AdditionalServices}/>
              <Route path="/socialservices" component={SocialServices}/>
              <Route path="/financialservices" component={FinancialServices}/>
              <Route path="/editfinancial/:_id" component={EditFinancial}/>
              <Route path="/addfinancial" component={AddFinResource}/>
              <Route path="/studentresources" component={StudentResources}/>
              <Route path="/faq" component={FAQ}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}
/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;

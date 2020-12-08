import React from 'react';
import PropTypes from 'prop-types';
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
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="back">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/signout" component={Signout}/>
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

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;

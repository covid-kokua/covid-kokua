import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        <Menu className='fixed' borderless>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header as='h1'>#Kokua-Hawai&apos;i</Header>
          </Menu.Item>
          <Menu.Item id='social' as={NavLink} activeClassName="" exact to="/socialservices" key='socialservices'>Social
            Services</Menu.Item>
          <Menu.Item id='financial' as={NavLink} activeClassName="active" exact to="/financialservices"
                     key='financialservices'>Financial
            Services</Menu.Item>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/adminfinancial" key='adminfin'>Financial Service Admin</Menu.Item>
          ) : ''}
          <Menu.Item id='student' as={NavLink} activeClassName="" exact to="/studentresources" key='studentresources'>Student
            Services</Menu.Item>
          <Menu.Item id='additional' as={NavLink} activeClassName="" exact to="/additional" key='additional'>Additional
            Services</Menu.Item>
          <Menu.Item id='faq' as={NavLink} activeClassName="" exact to="/faq" key='faq'>FAQ&apos;s</Menu.Item>
          <Menu.Item position='right'>
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="fitted right" icon={'user'}>
                  <Dropdown.Menu right>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

NavBar.propTypes = {
  currentUser: PropTypes.string,
};

const NavBarContainer = withTracker(() => ({
   currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);

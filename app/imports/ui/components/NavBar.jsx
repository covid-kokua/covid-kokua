import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
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
        </Menu>
    );
  }
}

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBar);

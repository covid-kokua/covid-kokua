import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
        <Menu attached="top" borderless>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header as='h1'>#COVID-Kokua</Header>
          </Menu.Item>

          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>Social Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>Financial Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>Student Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/additional" key='additional'>Additional Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/socialservices" key='socialservices'>Social
            Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="active" exact to="/financialservices" key='financialservices'>Financial
            Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/studentresources" key='studentresources'>Student
            Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>Additional
            Services</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>FAQ&apos;s</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/home" key='home'>How Can You Help?</Menu.Item>
        </Menu>
    );
  }
}

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBar);

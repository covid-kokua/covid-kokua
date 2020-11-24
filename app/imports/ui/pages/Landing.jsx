import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing'>
          <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
            <Image className='landing' src="/images/oahu.jpg"/>
            <Grid.Column width={8}>
              <h1>Welcome to #Kokua-Hawai&apos;i!</h1>
              <p>A center for all COVID related resources such as financial assistance, social services, and other
                services that will help our islands.</p>
              <Header as={NavLink} activeClassName="active" exact to="/home" key='home'>Let&apos;s go to the home
                page!</Header>
            </Grid.Column>
          </Grid>
          <iframe src="https://public.domo.com/cards/aAR5B" width="100%" height="600" marginHeight="0" marginWidth="0" frameBorder="0"></iframe>
        </div>
    );
  }
}

export default Landing;

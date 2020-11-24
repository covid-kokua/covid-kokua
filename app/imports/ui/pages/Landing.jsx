import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

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
            </Grid.Column>
          </Grid>
          <iframe src="https://public.domo.com/cards/aAR5B" width="100%" height="600" marginHeight="0" marginWidth="0" frameBorder="0"></iframe>

          <Container className='home'>
            <Header as='h1' textAlign='center'>Mission Statement</Header>
            <p>
              With so many websites failing to give the proper, relevant information to our residents, #COVID-Kokua is
              designed to ensure that all COVID related resources are in one spot. We have gathered information from
              multiple websites and have divided specific resources to their respective field. Ranging anywhere from
              social
              to financial services, we are dedicated to creating an easily navigated interface for all our users and
              have
              also included a FAQ page where we answer common questions that users may have about COVID resources,
              benefits,
              and other topics. With the impact of COVID-19, it is our mission to provide easy access to all the
              resources funded by the state/federal government to help those in need.
            </p>
            <Image centered src="/images/unemployment.png"/>

            <Image centered src="/images/question.png"/>
            <Header as='h1' textAlign='center'>How Do I Navigate #COVID-Kokua?</Header>
            <p>
              Using the navigation bar on the top of the webpage, we have made it easier to look for specific services
              for each families needs. We understand that all families do not have the same struggles during this hard
              time, so we have separated each service in its own section. Feel free to browse each section and find the
              information you need in a timely, efficient manner!
            </p>
          </Container>
        </div>
    );
  }
}

export default Landing;

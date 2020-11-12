import React from 'react';
import { Container } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
        <div className='homepage'>
          <Container className='home'>
            <p>With so many websites failing to give the proper, relevant information to our residents, #COVID-Kokua is
              designed to ensure that all COVID related resources are in one spot. We have gathered information from
              multiple websites and have divided specific resources to their respective field. Ranging anywhere from
              social
              to financial services, we are dedicated to creating an easily navigated interface for all our users and
              have
              also included a FAQ page where we answer common questions that users may have about COVID resources,
              benefits,
              and other topics.</p>
          </Container>
        </div>
    );
  }
}

export default Home;

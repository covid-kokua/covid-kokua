import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class FAQ extends React.Component {
  render() {
    return (
        <div>
          <Container className='faq'>
            <Header as='h1' textAlign='center'>Frequently asked Questions</Header>
            <Header as='h2' textAlign='center'>How Do I Navigate #COVID-Kokua?</Header>
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

export default FAQ;

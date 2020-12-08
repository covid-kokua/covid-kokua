import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class FAQ extends React.Component {
  render() {
    return (
        <div id='faq-page'>
          <Container className='faq'>
            <Header as='h1' textAlign='center'>Frequently asked Questions</Header>
            <Header as='h2' textAlign='center'>How Do I Navigate #COVID-Kokua?</Header>
            <p>
              Using the navigation bar on the top of the webpage, we have made it easier to look for specific services
              for each families needs. We understand that all families do not have the same struggles during this hard
              time, so we have separated each service in its own section. Feel free to browse each section and find the
              information you need in a timely, efficient manner!
            </p>
            <Header as='h2' textAlign='center'>Where do I get a COVID test?</Header>
            <p>
              The <a href="https://www.oneoahu.org/covid19-testing">oneoahu.org</a> website has information about
               where and when to get Surge testing, open to anyone, but preference is given to visitor industry
               and city employees. KITV4 news also published a story about COVID testing and provides a list of
               testing sites. That article can be found
                <a href='https://www.kitv.com/story/42562973/where-to-get-a-free-covid19-test-in-hawaii'>here</a>.
               Both test types are free to the public.
            </p>
          </Container>
        </div>
    );
  }
}

export default FAQ;

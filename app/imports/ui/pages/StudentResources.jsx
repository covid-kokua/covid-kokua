import React from 'react';
import { Container, Image, Header, List } from 'semantic-ui-react';

class StudentResources extends React.Component {
  render() {
    return (
        <div className='homepage'>
          <Container className='home'>
            <Header as='h1' textAlign='center' className='studentheader'>Student Resources</Header>
            <Image centered src="/images/CampusCenter.jpg"/>
            <Header as='h1' textAlign='fitted left'>UH Student Relief Fund</Header>
            <p>
             The goal of the Student Relief Fund is to help students financially who have fallen on difficult times
              while in school due to the coronavirus pandemic. This Fund is not a substitute for
              financial aid and must be used only for unplanned emergencies
              which inhibit the academic success of the student. Such emergencies can include but not limited to:
            </p>
            <List bulleted>
              <List.Item>loss of employment or housing</List.Item>
              <List.Item>family emergency</List.Item>
              <List.Item>food insecurity</List.Item>
              <List.Item>medical expenses</List.Item>
              <List.Item>natural disaster or pandemic</List.Item>
            </List>

            <Header as='h1' textAlign='fitted left'> Hamilton Library Remote Resources</Header>
            <Image src="/images/hamilton-library.jpg"/>
            <p>
              Hamilton Library offers remote consultation and assistance as well as other library resources online.
              They can be reached at <a href='https://manoa.hawaii.edu/library/remote-resources/.'
                                        target='new'>Hamilton Library</a>
            </p>
            <Header as='h1' textAlign='fitted left'> Learning Assistance Center</Header>
            <p>
              The Learning Assistance Center will be available for tutoring through online video meetings. The LAC
              can be reached by visiting <a href='https://manoa.hawaii.edu/undergrad/Learning/tutoring/'
                                            target='new'>Learning Assistance Center</a>. The subjects available for tutoring are:
            </p>
            <List bulleted>
              <List.Item>Math</List.Item>
              <List.Item>Science</List.Item>
              <List.Item>Statistics</List.Item>
              <List.Item>Business</List.Item>
              <List.Item>Language</List.Item>
            </List>
            <Header as='h1' textAlign='fitted left'> Counseling and Student Development Center</Header>
            <p>
              The CSDC offers a variety of services to students and can be very helpful during this period of stress and anxiety.
              They can be reached by visiting <a href='https://manoa.hawaii.edu/counseling/'
                                                 target='new'>Counseling and Student Development Center</a>. Some of their Services include
            </p>
            <List bulleted>
              <List.Item>Hawaii CARES Hotline</List.Item>
              <List.Item>National Suicide Prevention Lifeline</List.Item>
              <List.Item>The Disaster Destress Hotline</List.Item>
              <List.Item>Worklife Hawaii</List.Item>
            </List>
          </Container>
        </div>
    );
  }
}

export default StudentResources;

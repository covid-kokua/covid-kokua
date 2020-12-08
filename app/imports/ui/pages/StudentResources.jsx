import React from 'react';
import { Container, Image, Grid, Card } from 'semantic-ui-react';

class StudentResources extends React.Component {
  render() {
    return (
        <div id='student-page' className='student'>
          <Container className='student'>
            <Grid centered columns={3}>
              <h1>Student Services</h1>
              <h3>If you are a student looking for helpful COVID-19 information, click on the resources
                below. You can find descriptions as well as contact information, websites, ect.</h3>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='/images/CampusCenter.jpg'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>UH Student Relief Fund</Card.Header>
                      <Card.Description>
                        The goal of the Student Relief Fund is to help students financially who have fallen on difficult times
                        while in school due to the coronavirus pandemic. This Fund is not a substitute for
                        financial aid and must be used only for unplanned emergencies
                        which inhibit the academic success of the student.

                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.hawaii.edu/offices/student-affairs/urgent-student-relief-fund/">Student Relief Fund</a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column centered>
                  <Card>
                    <Image
                        src='/images/hamilton-library.jpg'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Hamilton Library</Card.Header>
                      <Card.Description>
                        Hamilton Library offers remote consultation and assistance as well as other library resources online.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://manoa.hawaii.edu/library/remote-resources/">Hamilton Library</a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='/images/Learning-Assistance-Center.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Learning Assistance Center</Card.Header>
                      <Card.Description>
                        The Learning Assistance Center will be available for tutoring through online video meetings.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://manoa.hawaii.edu/undergrad/Learning/tutoring/">Learning Assistance Center</a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='/images/CSDC.jpg'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Counseling and Student Development Center</Card.Header>
                      <Card.Description>
                        The CSDC offers a variety of services to students and can be very helpful
                        during this period of stress and anxiety.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://manoa.hawaii.edu/counseling/">Counseling and Student Development Center
                            </a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

export default StudentResources;

import React from 'react';
import { Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

class AdditionalServices extends React.Component {
  render() {
    return (
        <div className='additional'>
          <Container className='additional'>
            <Grid centered columns={3}>
              <h1>Additional Services</h1>
              <h3>Want to know more? Please visit some of the websites linked below to find information from state,
                federal, and official medical sources regarding COVID-19.</h3>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Seal_of_Honolulu%2C_Hawaii.svg/600px-Seal_of_Honolulu%2C_Hawaii.svg.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>OneOahu</Card.Header>
                      <Card.Description>
                        City & County of Honolulu website providing pertinent information and the reopening strategy.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.oneoahu.org/">https://www.oneoahu.org/<Icon name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column centered>
                  <Card>
                    <Image
                        src='https://149353219.v2.pressablecdn.com/wp-content/uploads/cdc-logo.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>CDC</Card.Header>
                      <Card.Description>
                        Official website of the Center for Disease Control & Prevention with information on how to stop the spread.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.cdc.gov/">https://www.cdc.gov/<Icon name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkFCvriTLEpGif0VY6NeptXUTpqwBsi8QZA&usqp=CAU'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>USA.gov</Card.Header>
                      <Card.Description>
                        Official U.S. Government website providing information on COVID-19 and government benefits.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.usa.gov/coronavirus">https://www.usa.gov/coronavirus<Icon
                            name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Seal_of_the_State_of_Hawaii.svg/1200px-Seal_of_the_State_of_Hawaii.svg.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Office of the Governor</Card.Header>
                      <Card.Description>
                        Official website of Governor David Ige of Hawaiʻi, with information and links to additional
                        COVID-19 resources and information.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://governor.hawaii.gov/covid-19/">https://governor.hawaii.gov/covid-19/<Icon
                            name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://www.performance.gov/img/cx/agencies/dhs-seal.png'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>FEMA</Card.Header>
                      <Card.Description>
                        Official website of the Federal Emergency Management Agency, with information regarding recovery
                        & economic support for individuals & businesses.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.fema.gov/disasters/coronavirus">https://www.fema.gov<Icon
                            name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image
                        src='https://everything-pr.com/wp-content/uploads/2020/08/AGF-l7_cyxF7JDiZ5t7ZJtTG8i8cSapQRrc9-rFviws900-c-k-c0xffffffff-no-rj-mo.jpg'
                        wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>SBA</Card.Header>
                      <Card.Description>
                        Official website of the U.S. Small Business Administration, with relief and funding options for
                        small businesses.
                      </Card.Description>
                      <Card.Description>
                        <a href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options">https://www.sba.gov<Icon
                            name='globe'/></a>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

export default AdditionalServices;

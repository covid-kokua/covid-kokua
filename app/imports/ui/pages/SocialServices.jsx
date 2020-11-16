import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';

class SocialServices extends React.Component {
  render() {
    return (
        <div className='social'>
          {/* <a href="" onClick="window.open('http://external.url', '_system')">Open</a> */}
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h1'>The following phone numbers are for direct social services:</Header>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <p>Public Assistance Information Line</p>
                      <p>Child Abuse Reporting</p>
                      <p>Child Abuse Reporting From Neighbor Islands</p>
                      <p>Child Trafficking Reporting</p>
                      <p>Child Trafficking Reporting From Neighbor Islands</p>
                      <p>Adult Abuse Reporting</p>
                    </Grid.Column>
                    <Grid.Column>
                      <p>855-643-1643</p>
                      <p>808-832-5300</p>
                      <p>Toll Free: 1-888-380-3088</p>
                      <p>808-832-1999</p>
                      <p>Toll Free: 1-888-398-1188</p>
                      <p>808-832-5115</p>
                    </Grid.Column>
                    <Divider vertical></Divider>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default SocialServices;

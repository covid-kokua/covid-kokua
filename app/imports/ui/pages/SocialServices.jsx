import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';

class SocialServices extends React.Component {
  render() {
    return (
        <div id='social-page' className='social'>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h5'>
                  Aloha United Way 211 is committed to connecting local residents to the info and resources they need,
                  which is free of charge, confidential, and is the only hotline partnered with the Department of
                  Health.
                </Header>
                <p>
                  They are dedicated to helping you find food, shelter, financial assistance, child care, parenting
                  support, elderly care, disability services, job training, and much more to help you get back on your
                  feet, one step at a time. Their hotline is open from 7:00 A.M. to 10:00 P.M., 7 days a week, with
                  multiple options for consultation like call, text, chat, email, and even an online database that is
                  open for use at any time.
                </p>
                <p>Website: <a href='https://auw211.org/' target='new'>https://auw211.org/</a></p>
                <p>
                  To speak to a representative call: <a href='tel:211'>2-1-1</a> or <a
                    href='tel:18772756569'>1-877-275-6569</a>
                </p>
                <p>
                  To chat with a representative online, click on the following link: <a
                    href='https://home-c19.incontact.com/inContact/ChatClient/ChatClientPatron.aspx?poc=75782264-8644-4c11-ab70-28eb11c497e9&bu=4595725'
                    target='new'>Chat</a>
                </p>
                <p>
                  To text a representative of Aloha United Way, click on this number: <a
                    href="sms:8772756569">877-275-6569</a> (Please remember to include your zip code in the initial
                  message)
                </p>
                <p>
                  To email the organization, click on the following link: <a
                    href="mailto:info211@auw.org">info211@auw.org</a>
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as='h5'>The Pantry is a food distribution service who provide millions of pounds of food to
                  local families who desperately need the assistance. Especially with COVID-19 cases increasing at an
                  alarming rate, research has shown that 1 in 3 people seeking groceries from non-profit organizations
                  have not needed emergency food aid prior to the pandemic.</Header>
                <p>
                  The Pantry by Feeding Hawai&apos;i Together has implemented a &quot;grocery store style&quot; type of
                  experience where people eligible for assistance are able to shop online for their groceries. They are
                  also
                  offering individual scheduled pick-up times to accomodate COVID-19 conditions. By offering a wide
                  range of food for free, The Pantry is able to distribute food without it every going to waste because
                  clients are shopping for food items that they need and want.
                </p>
                <p>If you would like to register, click on this link: <a href='https://thepantry.org/register/'
                                                                         target='new'>The
                  Pantry Registration</a></p>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4'>The following phone numbers are for direct social services:</Header>
                <Grid columns={2} divided>
                  <Grid.Column>
                    <p>Public Assistance Information Line</p>
                    <p>Child Abuse Reporting</p>
                    <p>Child Abuse Reporting From Neighbor Islands</p>
                    <p>Child Trafficking Reporting</p>
                    <p>Child Trafficking Reporting From Neighbor Islands</p>
                    <p>Adult Abuse Reporting</p>
                  </Grid.Column>
                  <Grid.Column>
                    <p><a href='tel:8556431643'>855-643-1643</a></p>
                    <p><a href='tel:8088325300'>808-832-5300</a></p>
                    <p>Toll Free: <a href='tel:18883803088'>1-888-380-3088</a></p>
                    <p><a href='tel:8088321999'>808-832-1999</a></p>
                    <p>Toll Free: <a href='tel:18883981188'>1-888-398-1188</a></p>
                    <p><a href='tel:8088325115'>808-832-5115</a></p>
                  </Grid.Column>
                  <Divider vertical></Divider>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default SocialServices;

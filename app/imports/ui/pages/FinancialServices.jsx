import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Resource from '../components/Resource';
import { Resources } from '../../api/resource/Resources';

/** Renders a table containing all of the Financial Resource documents. Use <StuffItem> to render each row. */
class FinancialServices extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='financial'>
          <Container>
            <Header as="h1" textAlign="center" className="financialHeader">Financial Information</Header>
            <p>This page is designed to contain resources primarily focused on finances, and financial support.
              If you know of a resource that is not listed here, please add it to the page using the &apos;Add
               a new Resource&apos; tool.</p>
            <div className={'addfinancial'}>
              <Link to={'/addfinancial'}>
                <Button>Add a new Resource</Button>
              </Link>
            </div>
            <Card.Group>{this.props.resources.map((resource, index) => <Resource key={index} resource={resource}/>)}</Card.Group>
          </Container>
        </div>

    );
  }
}

/** Require an array of Resource documents in the props. */
FinancialServices.propTypes = {
  resources: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Financial Resource documents.
  const subscription = Meteor.subscribe('financial');
  return {
    resources: Resources.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FinancialServices);

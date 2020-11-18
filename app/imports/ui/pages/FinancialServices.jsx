import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
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
        <Container>
          <Header as="h2" textAlign="center" inverted>Financial Information</Header>
          <Card.Group>{this.props.resources.map((resource, index) => <Resource key={index} resource={resource}/>)}</Card.Group>
        </Container>
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
  const subscription = Meteor.subscribe('Resources.financial');
  return {
    resources: Resources.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FinancialServices);

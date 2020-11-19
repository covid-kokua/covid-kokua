import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Resource extends React.Component {
  render() {
    return (
        <Card centered>
          <Image src={this.props.resource.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.resource.name}</Card.Header>
            <Card.Meta><a href={this.props.resource.website} target='_blank' rel='noreferrer noopener'>{this.props.resource.website}</a></Card.Meta>
            <Card.Meta>{this.props.resource.phoneNumber}</Card.Meta>
            <Card.Description>{this.props.resource.description}</Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Resource.propTypes = {
  resource: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Resource);

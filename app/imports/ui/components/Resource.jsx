import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Resource extends React.Component {
  render() {
    return (
        <Card centered>
          <Image src={this.props.resource.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.resource.name}</Card.Header>
            <Card.Meta>{this.props.resource.website}</Card.Meta>
            <Card.Meta>{this.props.resource.phoneNumber}</Card.Meta>
            <Card.Description>{this.props.resource.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.resource._id}`}>Edit</Link>
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

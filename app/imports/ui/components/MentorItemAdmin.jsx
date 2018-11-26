import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class MentorItemAdmin extends React.Component {
  render() {
    return (
        /*
        11/25/18
        Fit this back into AdminMentorList later
           {this.props.mentors.map((mentor) => <MentorItemAdmin key={mentor._id} mentor={mentor} />)}
         */
        <Grid.Row>
          /*<text>SPAM SPAM</text>*/
          /*<Header as='h2'><Icon name='user'/>{this.props.mentor.firstName} {this.props.mentor.lastName}</Header>*/
        </Grid.Row>
    );
  }
}

/** Require a document to be passed to this component. */
MentorItemAdmin.propTypes = {
  mentor: PropTypes.object.isRequired,
};

export default MentorItemAdmin;

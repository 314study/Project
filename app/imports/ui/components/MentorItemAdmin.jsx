import React from 'react';
import { Header, Icon, Segment, List } from 'semantic-ui-react';
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
      <Segment>
        <Header as='h1'><Icon name='user'/>{this.props.mentor.firstName} {this.props.mentor.lastName}</Header>
        <Header as='h2'><Icon name='book'/>Subjects</Header>
        <List bulleted relaxed>
          <List.Item>{this.props.mentor.class1}</List.Item>
          <List.Item>{this.props.mentor.class2}</List.Item>
          <List.Item>{this.props.mentor.class3}</List.Item>
        </List>
      </Segment>
    );
  }
}

/** Require a document to be passed to this component. */
MentorItemAdmin.propTypes = {
  mentor: PropTypes.object.isRequired,
};

export default MentorItemAdmin;

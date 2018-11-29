import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, List, Header, Loader, Icon, Segment, Divider } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
import MentorCard from '/imports/ui/components/MentorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Tutors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        /*
        11/15/18 - Jeff
        Implementing layout for mentor list display
        Nothing Changed yet
        Only changed mentor references and imported Mentors schema from /imports/api/mentor/mentor
        {this.props.mentors.map(mentor => <MentorItemAdmin key={mentor._id} mentor={mentor} />)}
        */
        <Container>
          <Divider hidden />
          <Header as="h1" textAlign="center">Tutors</Header>
          <Segment.Group>
            <Segment>
              <Header as='h1'><Icon name='user'/>Example Name</Header>
              <Header as='h2'><Icon name='book'/>Subjects</Header>
              <List bulleted relaxed>
                <List.Item>Class 1</List.Item>
                <List.Item>Class 2</List.Item>
                <List.Item>Class 3</List.Item>
              </List>
            </Segment>
            <Segment>
              <Header as='h1'><Icon name='user'/>Example Name</Header>
              <Header as='h2'><Icon name='book'/>Subjects</Header>
              <List bulleted relaxed>
                <List.Item>Class 1</List.Item>
                <List.Item>Class 2</List.Item>
                <List.Item>Class 3</List.Item>
              </List>
            </Segment>
             {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
          </Segment.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Tutors.propTypes = {
  mentors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /*
  Going to need to make a mentor.js file in '/startup/server'
  11/25/18
  -subscribed 'MentorAdmin' is from '/startup/server/mentor.js'
   */

  const subscription = Meteor.subscribe('MentorAdmin');
  return {
    mentors: Mentors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Tutors);

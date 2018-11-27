import React from 'react';
import { Grid, Card, Container, Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react/dist/commonjs/elements/List/List';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class MentorCard extends React.Component {
  render() {
    return (
        /*
        11/25/18
        Fit this back into AdminMentorList later
           {this.props.mentors.map((mentor) => <MentorItemAdmin key={mentor._id} mentor={mentor} />)}
         */
        <Grid.Column>
          <Card>
            <Card.Header className='mentor-card-header'>
              {this.props.mentor.firstName} {this.props.mentor.lastName}
            </Card.Header>
            <Card.Content>
              <Container>
                <Grid>
                  <Grid.Column width={8}>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                  </Grid.Column>
                  <Grid.Column width={4} className='text-align-center'>
                    <List bulleted relaxed>
                      <List.Item>{this.props.mentor.class1}</List.Item>
                      <List.Item>{this.props.mentor.class2}</List.Item>
                      <List.Item>{this.props.mentor.class1}</List.Item>
                    </List>
                  </Grid.Column>
                </Grid>
              </Container>
            </Card.Content>
          </Card>
        </Grid.Column>
    );
  }
}

/** Require a document to be passed to this component. */
MentorCard.propTypes = {
  mentor: PropTypes.object.isRequired,
};

export default MentorCard;

import React from 'react';
import { Card, Grid, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Students extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <div style={divStyle}>
          <Header as="h2" textAlign="center">Class List</Header>
          <Grid container stackable columns={4}>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 1</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Math <br />
                      English
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      M W F
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 2</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      ICS <br />
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T R
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 3</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Chemisrty <br />
                      Spelling
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T F S Su
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 3</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Chemisrty <br />
                      Spelling
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T F S Su
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 3</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Chemisrty <br />
                      Spelling
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T F S Su
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 3</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Chemisrty <br />
                      Spelling
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T F S Su
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 3</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Chemisrty <br />
                      Spelling
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      T F S Su
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Header className='text-align-center font-Small Nunito-font'>Test Student 1</Card.Header>
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className='text-align-center'>
                      Classes: <br />
                      Math <br />
                      English
                    </Grid.Column>
                    <Grid.Column width={6} className='text-align-center'>
                      Availability: <br />
                      M W F
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Students.propTypes = {
  // stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Students');
  return {
    // stuffs: Stuffs.find({}).fetch(), Nothing to fetch yet
    ready: subscription.ready(),
  };
})(Students);

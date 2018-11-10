import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Tutors extends React.Component {

  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Tutors</Header>
            <Header as="h3" textAlign="center">There will be cards with peoples info here.</Header>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Tutors;

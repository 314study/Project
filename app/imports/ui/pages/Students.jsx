import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Students extends React.Component {

  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Students but only visable to those logged in</Header>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Students;

import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class ClassList extends React.Component {

  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Class List</Header>
          </Grid.Column>
        </Grid>
    );
  }
}

export default ClassList;

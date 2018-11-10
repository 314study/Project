import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Statistics extends React.Component {

  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Statiscits</Header>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Statistics;

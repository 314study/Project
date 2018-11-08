import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <Grid textAlign='center' container>
            <Grid.Column width={3}>
              <List> Social Media </List>
              <hr/>
              <List.Item> Facebook </List.Item>
              <List.Item> Instagram </List.Item>
              <List.Item> Twitter </List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>Useful Links</List>
              <hr/>
              <List.Item>Khan Academy</List.Item>
              <List.Item>Chegg</List.Item>
              <List.Item>Stack Overflow</List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>Support Us</List>
              <hr/>
              <List.Item>PayPal</List.Item>
              <List.Item>GoFund Me</List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>About Us</List>
              <hr/>
              <List.Item>
                PHQSHTP inc. llc. co. LtD. est 2018 <br />
                University of Hawaii<br />
                Honolulu, HI 96822
              </List.Item>
            </Grid.Column>
          </Grid>
        </footer>
    );
  }
}

export default Footer;

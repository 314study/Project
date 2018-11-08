import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <Grid textAlign='center' container>
            <Grid.Column width={3}>
              <List> Useful links </List>
              <hr/>
              <List.Item> Khan Academy </List.Item>
              <List.Item> The text book bro </List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>We like ratings!</List>
              <hr/>
              <List.Item>A Mentor</List.Item>
              <List.Item>A Student</List.Item>
              <List.Item>This app</List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>Support Us</List>
              <hr/>
              <List.Item>PayPal</List.Item>
              <List.Item>GoFund Me</List.Item>
              <List.Item>PLz HAlp, need MoNeeyzz</List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>About Us</List>
              <hr/>
              <List.Item>
                PHQSHTP inc llc est 2018 ltd <br />
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

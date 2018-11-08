import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="inverted-section">
          <div className="ui center aligned container">
            <p className="Nunito-font font-large">
              <span className="font-bold font-color-white">Welcome to</span>
              <span className="font-bold font-color-green"> LO</span>
              <span className="font-color-green">GO</span>
              <p className="font-small font-color-grey">
                <span className="font-bold font-color-lightgrey">P</span>eople
                <span className="font-bold font-color-lightgrey"> H</span>ave
                <span className="font-bold font-color-lightgrey"> Q</span>uestions,
                <span className="font-bold font-color-lightgrey"> S</span>o
                <span className="font-bold font-color-lightgrey"> H</span>elp
                <span className="font-bold font-color-lightgrey"> T</span>hem
                <span className="font-bold font-color-lightgrey"> P</span>lease.
              </p>
            </p>
            <Grid container stackable centered columns={3}>
              <Grid.Column>
                <p className="font-color-white">CARD</p>
              </Grid.Column>
              <Grid.Column>
                <p className="font-color-white">CARD</p>
              </Grid.Column>
              <Grid.Column>
                <p className="font-color-white">CARD</p>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Landing;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
import MentorCard from '/imports/ui/components/MentorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import CalendarItem from '../components/CalendarItem';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {

    return (
    <div>

      <div className="background-site">
            <div className="ui center aligned container container-width big-padding-bottom">
              <p className="Nunito-font font-large big-padding-top">
                <span className="font-bold font-color-white">Welcome to</span>
                <span className="font-bold font-color-green"> Stud</span>
                <span className="font-color-green">Budd</span>
                <p className="font-small font-color-white big-padding-bottom">
                  <span className="font-bold font-color-lightgrey">P</span>eople
                  <span className="font-bold font-color-lightgrey"> H</span>ave
                  <span className="font-bold font-color-lightgrey"> Q</span>uestions,
                  <span className="font-bold font-color-lightgrey"> S</span>o
                  <span className="font-bold font-color-lightgrey"> H</span>elp
                  <span className="font-bold font-color-lightgrey"> T</span>hem
                  <span className="font-bold font-color-lightgrey"> P</span>lease.
                </p>
              </p>
              <Grid container stackable columns={3}>
                {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
                {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
                {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
              </Grid>
            </div>
            <Header/>
          </div>
          <div>
            <div className="ui center aligned container">
              <Header/>
              <Grid container columns={2}>
                <Grid.Column>
                  <p className="Nunito-font font-medium text-align-right margin-bottom-minus-10"><span
                      className="font-bold">Why use Stud</span>Budd?</p>
                  <p className="text-align-right font-small">
                    <span className="font-bold">Develop</span> your Study Habits.
                    <br/>
                    <span className="font-bold">Strengthen</span> your knowledge.
                    <br/>
                    <span className="font-bold">Establish Connections</span> with classmates.
                    <br/>
                    <span className="font-bold">Get the Grade.</span>
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p className="Nunito-font font-medium text-align-left margin-bottom-minus-10">
                    <span className="font-bold font-large font-color-green">305</span> Students.
                    <br/>
                    <span className="font-bold font-large font-color-green">47</span> Mentors.
                    <br/>
                    <span className="font-bold font-large font-color-green">17</span> Subjects.
                  </p>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div className="inverted-section">
          </div>
          <div>
            <CalendarItem/>
          </div>
          <div className="inverted-section">
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div className="inverted-section">
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div className="inverted-section">
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div className="inverted-section">
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div className="inverted-section">
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system,
              and expound the actual teachings of the great explorer of the truth, the master-builder
              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
              is pleasure, but because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful. Nor again is there anyone who
              loves or pursues or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain can procure
              him some great pleasure. To take a trivial example, which of us ever undertakes
              laborious physical exercise, except to obtain some advantage from it? But who
              has any right to find fault with a man who chooses to enjoy a pleasure that has
              no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
          </div>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Landing.propTypes = {
  mentors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {

  const subscription = Meteor.subscribe('Mentor');
  return {
    mentors: Mentors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Landing);

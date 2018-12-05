import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
import { Profile } from '/imports/api/profile/profile';
import MentorCard from '/imports/ui/components/MentorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import CalendarItem from '../components/CalendarItem';
import { Calendar } from '/imports/api/Calendar/Calendar';

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
                <p className="font-small font-color-white medium-padding-bottom">
                  <span className="font-bold font-color-lightgrey">P</span>eople
                  <span className="font-bold font-color-lightgrey"> H</span>ave
                  <span className="font-bold font-color-lightgrey"> Q</span>uestions,
                  <span className="font-bold font-color-lightgrey"> S</span>o
                  <span className="font-bold font-color-lightgrey"> H</span>elp
                  <span className="font-bold font-color-lightgrey"> T</span>hem
                  <span className="font-bold font-color-lightgrey"> P</span>lease.
                </p>
              </p>
              <div className="ui center aligned container small-padding-bottom">
                <span className="Nunito-font font-medium font-bold font-color-green">
                  Our Top Mentors
                </span>
              </div>
                <Grid container stackable columns={3}>
                  {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
                </Grid>
            </div>
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
                    <span className="font-bold font-large font-color-green">{this.props.student.length}</span> Students.
                    <br/>
                    <span className="font-bold font-large font-color-green">{this.props.mentors.length}</span> Mentors.
                    <br/>
                    <span className="font-bold font-large font-color-green">17</span> Subjects.
                  </p>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div>
           {this.props.Calendar.map((calendar) => <CalendarItem key={calendar._id} Calendar={calendar} />)}
          </div>
      </div>
    );
  }
}
/** Require an array of Stuff documents in the props. */
Landing.propTypes = {
  mentors: PropTypes.array.isRequired,
  student: PropTypes.array.isRequired,
  Calendar: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Mentor');
  const subscription2 = Meteor.subscribe('Profile');
  const subscription3 = Meteor.subscribe('Calendar');
  return {
    mentors: Mentors.find({}).fetch(),
    student: Profile.find({}).fetch(),
    Calendar: Calendar.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready() && subscription3.ready(),
  };
})(Landing);

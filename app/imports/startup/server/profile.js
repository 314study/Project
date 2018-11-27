import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';
import { Profile } from '../../api/profile/profile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.firstName} (${data.owner})`);
  Profile.insert(data);
}

/** Initialize the collection if empty. */
if (Profile.find().count() === 0) {
  if (Meteor.settings.defaultProfile) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfile.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Profile', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profile.find({ owner: username });
  }
  return this.ready();
});

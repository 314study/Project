import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Calendar } from '../../api/Calendar/Calendar.js';
import { Stuffs } from '../../api/stuff/stuff.js';

/** Initialize the database with a default data document. */
function addData(data) {
  Calendar.insert(data);
}

/** Initialize the collection if empty. */
if (Calendar.find().count() === 0) {
  if (Meteor.settings.defaultCalendar) {
    console.log('Creating default data.');
    Meteor.settings.defaultCalendar.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuffs', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Calendar.find();
  }
  return this.ready();
});

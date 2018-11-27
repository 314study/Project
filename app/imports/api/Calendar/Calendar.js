import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Calendar = new Mongo.Collection('Calendar');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CalendarSchema = new SimpleSchema({
  day: String,
  timeBegin: String,
  timeEnd: String,
  condition: {
    type: String,
    allowedValues: ['available', 'not available', 'maybe'],
    defaultValue: 'not available',
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Calendar.attachSchema(CalendarSchema);

/** Make the collection and schema available to other code. */
export { Calendar, CalendarSchema };

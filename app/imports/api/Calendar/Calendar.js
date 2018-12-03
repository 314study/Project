import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Calendar = new Mongo.Collection('Calendar');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CalendarSchema = new SimpleSchema({
  MotimeBegin: String,
  MotimeEnd: String,
  TutimeBegin: String,
  TutimeEnd: String,
  WetimeBegin: String,
  WetimeEnd: String,
  ThtimeBegin: String,
  ThtimeEnd: String,
  FrtimeBegin: String,
  FrtimeEnd: String,
  SatimeBegin: String,
  SatimeEnd: String,
  SutimeBegin: String,
  SutimeEnd: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Calendar.attachSchema(CalendarSchema);

/** Make the collection and schema available to other code. */
export { Calendar, CalendarSchema };

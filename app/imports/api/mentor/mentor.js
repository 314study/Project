import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Mentors = new Mongo.Collection('Mentors');

/** Create a schema to constrain the structure of documents associated with this collection. */
const MentorSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  age: Number,
  subjectStrength: String,
  major: String,
  contactNumber: Number,
  experience: {
    type: String,
    allowedValues: ['Yes', 'No'],
    defaultValue: 'Yes',
  },
  availableHours: String,
  availableDaysOfWeek: String,
  owner: String,
  class1: String,
  class2: String,
  class3: String,
  availability: String,
  /*
  can eventually include
  -----------------
  image: String,
   */
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Mentors.attachSchema(MentorSchema);

/** Make the collection and schema available to other code. */
export { Mentors, MentorSchema };

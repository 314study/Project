import React from 'react';
import { Mentors, MentorSchema } from '/imports/api/mentor/mentor';
import { Grid, Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class EditMentor extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { firstName, lastName, subjectStrength, contactNumber, availableHours,
      availableDaysOfWeek, class1, class2, class3, _id } = data;
    Mentors.update(_id, { $set: { firstName, lastName, subjectStrength,
        contactNumber, availableHours, availableDaysOfWeek, class1, class2, class3 } }, this.insertCallback());

  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <div className="inverted-section">
        <Grid centered container>
          <Grid.Column>
            <p className="text-align-center Nunito-font font-medium small-padding-top font-color-white">Edit <span className="font-color-green">Profile</span></p>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={MentorSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='firstName'/>
                <TextField name='lastName'/>
                <TextField name='subjectStrength'/>
                <TextField name='contactNumber'/>
                <TextField name='availableHours'/>
                <TextField name='availableDaysOfWeek'/>
                <TextField name='class1'/>
                <TextField name='class2'/>
                <TextField name='class3'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default EditMentor;

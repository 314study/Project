import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Instruction extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', paddingBottom: '20px' };
    return (
        <Grid container centered style={divStyle}>
          <Grid.Column>
            <p></p>
            <Header as="h2" textAlign="center">Intructions For Students</Header>
            <Header as="h3" textAlign="center">Sign Up</Header>
            <p> The sign up page is where you sign up for an account as a student to interact with other students or choose an available tutoring session to join. Using your email and creating your password. </p>
            <Header as="h3" textAlign="center">Sign In</Header>
            <p> After creating an account from the Sign Up page, you can log in with your email and password to gain access to the Classes and Tutors page. </p>
            <Header as="h3" textAlign="center">Editing your profile</Header>
            <p> You can use the Edit Profile page to change your first name, last name, and a class that you are looking for help in.</p>
            <Header as="h3" textAlign="center">Class List</Header>
            <p>If you are signed in as a student, you will be able to select from a variety of classes that are offered by Tutors to help you. Within the classes, it will also show you when and where the tutoring sessions will be held. </p>
            <Header as="h3" textAlign="center">Students Page</Header>
            <p> Once you are logged in as a student, you will be able to create a study session with fellow students who are also interested or need help in your course/ subject.</p>
            <Header as="h3" textAlign="center">Tutors</Header>
            <p> The Tutors page will allow students to view tutors that has applied and has been approved, as well as their major and area of strength.</p>
            <Header as="h3" textAlign="center">Sign Out</Header>
            <p> Completely signs you out of your account so other people on the computer will not be able to change nor view your information and sesssions.</p>
            <Header as="h2" textAlign="center">Intructions For Tutors</Header>
            <Header as="h3" textAlign="center">Sign In</Header>
            <p> Once you are approved as a tutor, you will be able to sign in using your email. Which then you will gain accesses Classes page, Tutors page, as well as being able to change your profile. </p>
            <Header as="h3" textAlign="center">Mentorship Application</Header>
            <p> By filling and submitting this form, you are applying to become a tutor for the students in need of help. After submitting, you will then wait for verification from admins to see if you are qualified to be a tutor. </p>
            <Header as="h3" textAlign="center">Class List</Header>
            <p> Tutors: If you are signed in as a tutor, you will be able to create a class you are willing to offer help to students in need. After creating tutoring session, you will be able to choose your availability and location of the tutoring session.</p>
            <Header as="h3" textAlign="center">Tutors</Header>
            <p> The Tutors page will allow tutors to view other tutors that has applied and has been approved, as well as their major and area of strength. As well as checking to see if their own profile has been uploaded.</p>
            <Header as="h3" textAlign="center">Sign Out</Header>
            <p> Completely signs you out of your account so other people on the computer will not be able to change nor view your information and sesssions.</p>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Instruction;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Menu, Grid, Loader, Dropdown, Header, Icon, List, Segment, Container, Divider } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
import MentorCard from '/imports/ui/components/MentorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
// import { Segment } from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
// import { List } from 'semantic-ui-react/dist/commonjs/elements/List/List';


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ClassList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { activeItem } = this.state || {};
    return (
        <Grid>
          <Grid.Row>
            <Container>
              <Divider hidden />
              <Header as="h1" textAlign="center">Classes Available</Header>
              <Header as='h3' dividing/>
            </Container>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width = {1}>
              <Divider vertical hidden />
            </Grid.Column>
         <Grid.Column>
          <Menu vertical>
            <Menu.Item>
              <Menu.Header>STEM</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                    name='Pysics'
                    active={activeItem === 'Physics'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Chemistry'
                    active={activeItem === 'Chemistry'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Biology'
                    active={activeItem === 'Biology'}
                    onClick={this.handleItemClick}
                />
                <Dropdown item text='Engineering'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='Mechanical' />
                    <Dropdown.Item text='Civil' />
                    <Dropdown.Item text='Electrical' />
                    <Dropdown.Item text='Computer' />
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    name='Math'
                    active={activeItem === 'Math'}
                    onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Social Sciences</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                    name='Psychology'
                    active={activeItem === 'Psychology'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Antrhopology'
                    active={activeItem === 'Anthropology'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Sociology'
                    active={activeItem === 'Sociology'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Political Science'
                    active={activeItem === 'Political Science'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Economics'
                    active={activeItem === 'Economics'}
                    onClick={this.handleItemClick}
                />
              </Menu.Menu>
              <Menu.Item>
                <Menu.Header>Humanities</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                    name='Philosiphy'
                    active={activeItem === 'Philosiphy'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='History'
                    active={activeItem === 'History'}
                    onClick={this.handleItemClick}
                />
                <Dropdown item text='Languages'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='English'/>
                    <Dropdown.Item text='Japanese'/>
                    <Dropdown.Item text='Korean'/>
                    <Dropdown.Item text='Mandarin'/>
                    <Dropdown.Item text='Spanish'/>
                    <Dropdown.Item text='German'/>
                    <Dropdown.Item text='Russian'/>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    name='Religon'
                    active={activeItem === 'Religon'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Law'
                    active={activeItem === 'Law'}
                    onClick={this.handleItemClick}
                />
                <Dropdown item text='Art'>
                  <Dropdown.Menu>
                    <Dropdown.Item text='Drawing'/>
                    <Dropdown.Item text='Painting'/>
                    <Dropdown.Item text='Potery'/>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu.Item>
            </Menu.Item>
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Menu.Item>
                <Menu.Header>Tester</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                      name='Class1'
                      active={activeItem === 'Class1'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='Class2'
                      active={activeItem === 'Class2'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='D4nk Maymays'
                      active={activeItem === 'D4nk Maymays'}
                      onClick={this.props.mentors.map(
                          mentor => <MentorCard
                               key={mentor._findMapping(mentor.class === 'D4nk Maymays')} mentor={mentor} />)}
                  />
                </Menu.Menu>
              </Menu.Item>
          ) : ''}
          </Menu>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Header as='h1'><Icon name='user'/>Example Name</Header>
              <Header as='h2'><Icon name='book'/>Subjects</Header>
              <List bulleted relaxed>
                <List.Item>Class 1</List.Item>
                <List.Item>Class 2</List.Item>
                <List.Item>Class 3</List.Item>
              </List>
            </Segment>
            {this.props.mentors.map(mentor => <MentorCard key={mentor._id} mentor={mentor} />)}
            {this.props.mentors.map(
                mentor => <MentorCard key={mentor._findMapping(mentor.class3 === 'D4nk Maymays')} mentor={mentor} />,
            )}
          </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ClassList.propTypes = {
  mentors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /*
  Going to need to make a mentor.js file in '/startup/server'
  11/25/18
  -subscribed 'MentorAdmin' is from '/startup/server/mentor.js'
   */

  const subscription = Meteor.subscribe('MentorAdmin');
  return {
    mentors: Mentors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClassList);

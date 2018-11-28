import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Menu, Container, Loader, Dropdown } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
// import MentorCard from '/imports/ui/components/MentorCard';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// import classSubMenu from 'ui/components/classSubMenu';

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
        <Container>
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
            </Menu.Item>
          </Menu>

        </Container>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class classSubMenu extends React.Component {
  render() {
    const menuStyle = { marginBottom: '0px' };
    return (
        <Menu vertical>

          <Menu.Item>
            STEM
            <Menu.Menu>
              <Menu.Item>Physics</Menu.Item>
              <Menu.Item>Chemistry</Menu.Item>
              <Menu.Item>Biology</Menu.Item>
              <Dropdown item text='Engineering'>
                <Dropdown.Menu>
                  <Dropdown.Item text='Mechanical'/>
                  <Dropdown.Item text='Civil'/>
                  <Dropdown.Item text='Electrical'/>
                  <Dropdown.Item text='Computer'/>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Math</Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            Humanities
            <Menu.Menu>
              <Menu.Item>Philosiphy</Menu.Item>
              <Menu.Item>History</Menu.Item>
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
              <Menu.Item>Religon</Menu.Item>
              <Menu.Item>Law</Menu.Item>
              <Dropdown item text='Art'>
                <Dropdown.Menu>
                  <Dropdown.Item text='Drawing'/>
                  <Dropdown.Item text='Painting'/>
                  <Dropdown.Item text='Potery'/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            Social Sciences
            <Menu.Menu>
              <Menu.Item>Political Science</Menu.Item>
              <Menu.Item>Economics</Menu.Item>
              <Menu.Item>Psychology</Menu.Item>
              <Menu.Item>Sociology</Menu.Item>
              <Menu.Item>Anthropology</Menu.Item>
            </Menu.Menu>
          </Menu.Item>

        </Menu>
    );
  }
}

/** Declare the types of all properties. */
classSubMenu.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const classSubMenuContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(classSubMenu);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(classSubMenuContainer);

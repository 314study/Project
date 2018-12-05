import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CalendarItem extends React.Component {
  render() {
    return (
          <Table celled>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell colSpan='7'>Availability</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Su</Table.HeaderCell>
                <Table.HeaderCell>Mo</Table.HeaderCell>
                <Table.HeaderCell>Tu</Table.HeaderCell>
                <Table.HeaderCell>We</Table.HeaderCell>
                <Table.HeaderCell>Th</Table.HeaderCell>
                <Table.HeaderCell>Fr</Table.HeaderCell>
                <Table.HeaderCell>Sa</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.props.Calendar.SundayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.MondayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.TuesdayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.WednesdayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.ThursdayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.FridayAvailability}</Table.Cell>
                <Table.Cell>{this.props.Calendar.SaturdayAvailability}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
    );
  }
}
CalendarItem.propTypes = {
  Calendar: PropTypes.object.isRequired,
};
export default CalendarItem;

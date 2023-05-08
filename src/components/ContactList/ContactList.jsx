import PropTypes from 'prop-types';
import { Component } from 'react';
import { List } from './ContactList.styled';
import { Contact } from './Contact/Contact';

export class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={this.props.onDeleteContact}
              id={contact.id}
            />
          );
        })}
      </List>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}
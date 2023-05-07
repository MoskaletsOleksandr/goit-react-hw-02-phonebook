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

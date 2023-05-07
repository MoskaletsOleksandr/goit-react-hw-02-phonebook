import { Component } from 'react';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

export class Contact extends Component {
  render() {
    return (
      <ContactItem>
        <ContactName>{this.props.name}:</ContactName>
        <ContactNumber>{this.props.number}</ContactNumber>
        <DeleteButton
          type="button"
          onClick={() => this.props.onDeleteContact(this.props.id)}
        >
          Delete
        </DeleteButton>
      </ContactItem>
    );
  }
}

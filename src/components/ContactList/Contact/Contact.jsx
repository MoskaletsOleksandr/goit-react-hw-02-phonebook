import PropTypes from 'prop-types';
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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

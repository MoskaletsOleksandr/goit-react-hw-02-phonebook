import PropTypes from 'prop-types';
import { Component } from 'react';
import { Label, Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <Label>
        Find contact by name
        <Input onChange={this.props.onChange} />
      </Label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

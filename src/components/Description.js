import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ handleChange }
          type="text"
          id="description"
          name="description"
        />
      </label>
    );
  }
}

Description.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

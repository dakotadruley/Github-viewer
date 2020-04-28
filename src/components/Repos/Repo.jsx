import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url }) => (
  <a href={url}>{name}</a>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Repo;

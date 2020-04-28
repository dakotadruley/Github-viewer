import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, followers, following, link }) => (
  <section>
    <h2>{name}</h2>
    <a href={link}>GitHub</a>
    <p>{followers}</p>
    <p>{following}</p>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired
};

export default User;

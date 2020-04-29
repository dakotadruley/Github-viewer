import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ name, avatar_url, followers, following, html_url }) => (
  <section>
    <h2>{name}</h2>
    <img src={avatar_url} alt={name} />
    <a href={html_url}>GitHub</a>
    <p>{followers}</p>
    <p>{following}</p>
  </section>
);

UserDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired
};

export default UserDisplay;

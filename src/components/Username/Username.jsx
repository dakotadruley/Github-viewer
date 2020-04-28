import React from 'react';
import PropTypes from 'prop-types';

const Username = ({ username, onClick }) => (
  <>
    <input type="text" name="username" value={username} />
    <button type="button" name="username" value={username} onClick={onClick} >Search</button>
  </>
);
Username.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Username;

// user logs in and types in a username and clicks the button to search for that username

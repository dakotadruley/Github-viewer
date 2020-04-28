import React from 'react';
import PropTypes from 'prop-types';

const SearchUser = ({ username, onClick }) => (
  <>
    <input type="test" name="username" value={username} />
    <button type="button" name="username" value={username} onClick={onClick} />
  </>
);
SearchUser.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default SearchUser;

// user logs in and types in a username and clicks the button to search for that username

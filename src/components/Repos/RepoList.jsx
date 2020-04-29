import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo.jsx';

const RepoList = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default RepoList;

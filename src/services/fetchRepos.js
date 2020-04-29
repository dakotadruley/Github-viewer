export const fetchRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json());
};

// fetch call to get the repose for that user

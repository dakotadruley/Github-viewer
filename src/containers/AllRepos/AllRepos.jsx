import React, { Component } from 'react';
import RepoList from '../../components/Repos/RepoList.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';

export default class AllRepos extends Component {
  state = {
    username: 'dakotadruley',
    repos: [],
    loading: true,
  }

  componentDidMount() {
    fetchRepos(this.state.username)
      .then(repos => this.setState({ repos, loading: false }));
  }

  render() {
    const { repos, loading } = this.state;
    if(loading) return <h1>LOADIN</h1>;

    return (
      <RepoList repos={repos} />
    );
  }
}

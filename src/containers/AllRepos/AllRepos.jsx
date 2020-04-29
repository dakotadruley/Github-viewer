import React, { Component } from 'react';
import RepoList from '../../components/Repos/RepoList.jsx';
import { fetchRepos } from '../../services/fetchRepos.js';
import PropTypes from 'prop-types';

export default class AllRepos extends Component {
// you can add props here before state
static propTypes = { username: PropTypes.string.isRequired }

  state = {
    repos: [],
    loading: true,
  }

  componentDidMount() {
    fetchRepos(this.props.username)
      .then(repos => this.setState({ repos, loading: false }));
  }
  // updating so that the repos update with name change in user search 
  componentDidUpdate(prevProps) {
    if(prevProps.username !== this.props.username) 

      fetchRepos(this.props.username)
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

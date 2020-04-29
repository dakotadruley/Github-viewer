import React, { Component } from 'react';
import Username from '../../components/Username/Username.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';
import { fetchUser } from '../../services/fetchUser.js';
import AllRepos from '../AllRepos/AllRepos.jsx';

export default class SearchUser extends Component {
  state = { 
    username: 'dakotadruley',
    currentInput: 'dakotadruley2',
    userdisplay: {},
    loading: true };
    
    // using two divergent states (username)
    handleChange = ({ target }) => {
      this.setState({ currentInput: target.value });

    }

    handleClick = () => {
      this.setState(state => ({ username: state.currentInput }));
    } 
  
    componentDidMount() {
      fetchUser(this.state.username)
        .then(userdisplay => this.setState({ userdisplay, loading: false }));
    }

    // props is the first argument so you have to pass in state after to access it
    componentDidUpdate(prevProps, prevState) {
      if(prevState.username !== this.state.username)
        fetchUser(this.state.username)
          .then(userdisplay => this.setState({ userdisplay, loading: false }));
    }
    
    render() {
      const { username, userdisplay, loading, currentInput } = this.state;
      if(loading) return (<h1>LOADIN</h1>);

      return (
        <>
          <Username username={currentInput} 
            onChange={this.handleChange}
            onClick={this.handleClick} />
          <UserDisplay {...userdisplay} />
          <AllRepos username={username} />
        </>
      );
    }
}

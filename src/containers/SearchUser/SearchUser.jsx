import React, { Component } from 'react';
import Username from '../../components/Username/Username.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';
import { fetchUser } from '../../services/fetchUser.js';

export default class SearchUser extends Component {
  state = { 
    username: 'dakotadruley',
    userdisplay: {},
    loading: true };
    
    handleClick = ({ target }) => {
      this.setState({ [target.name]: target.value });

    };
  
    componentDidMount() {
      fetchUser(this.state.username)
        .then(userdisplay => this.setState({ userdisplay, loading: false }));
    }
    
    render() {
      const { username, userdisplay, loading } = this.state;
      if(loading) return (<h1>LOADIN</h1>);
      
      return (
        <>
          <Username username={username}
            onClick={this.handleClick} />
          <UserDisplay {...userdisplay} />
        </>
      );
    }
}

import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='profile-container'>
          <div className='profile-menu'>
            <img src='/images/noimage.png' alt='profile' />
            <Paper>
              <MenuList>
                <MenuItem>My Routines</MenuItem>
                <MenuItem>My Logs</MenuItem>
                <MenuItem>Favorites</MenuItem>
                <MenuItem>Custom exercises</MenuItem>
                <MenuItem>Setings</MenuItem>
              </MenuList>
            </Paper>
          </div>
          <h1>Welcome {this.props.user.name}</h1>
        </div>
      </>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Routines from './Routines';
import Logs from './Logs';

class Profile extends Component {
  state = {
    selected: this.props.match.params.id
  };

  handleMenuClick = selected => this.setState({ selected });

  render() {
    return (
      <>
        <div className='profile-container'>
          <div className='profile-menu'>
            <div className='img-container'>
              <img src='/images/noimage.png' alt='profile' />
              <button>Edit</button>
            </div>
            <Paper>
              <MenuList style={{ outline: 'none' }}>
                <Link to='/Profile/My-Routines'>
                  <MenuItem
                    selected={this.state.selected === 'My-Routines'}
                    onClick={() => this.handleMenuClick('My-Routines')}
                  >
                    My Routines
                  </MenuItem>
                </Link>
                <Link to='/Profile/My-Logs'>
                  <MenuItem
                    selected={this.state.selected === 'My-Logs'}
                    onClick={() => this.handleMenuClick('My-Logs')}
                  >
                    My Logs
                  </MenuItem>{' '}
                </Link>
                <Link to='/Profile/Favorites'>
                  <MenuItem
                    selected={this.state.selected === 'Favorites'}
                    onClick={() => this.handleMenuClick('Favorites')}
                  >
                    Favorites
                  </MenuItem>
                </Link>
                <Link to='/Profile/Custom-Exercises'>
                  <MenuItem
                    selected={this.state.selected === 'Custom-Exercises'}
                    onClick={() => this.handleMenuClick('Custom-Exercises')}
                  >
                    Custom exercises
                  </MenuItem>
                </Link>
                <Link to='/Profile/Settings'>
                  {' '}
                  <MenuItem
                    selected={this.state.selected === 'Settings'}
                    onClick={() => this.handleMenuClick('Settings')}
                  >
                    Settings
                  </MenuItem>
                </Link>
              </MenuList>
            </Paper>
            <span>{this.props.user.name} 19 , male</span>
          </div>
          <Switch>
            <Route
              path='/Profile/My-Routines'
              render={props => <Routines {...props} user={this.props.user} />}
            />
            <Route
              path='/Profile/My-Logs'
              render={props => <Logs {...props} user={this.props.user} />}
            />
            <Redirect from='/:id' to='/' />
          </Switch>
        </div>
      </>
    );
  }
}

export default Profile;

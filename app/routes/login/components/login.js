import app from '../../../components/common';
import Login from '../../../components/login';
import React from 'react';
import debug from 'debug';

debug('test', Login);

app.init();

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <span>login</span>
        <Login />
      </div>
    )
  }
}

module.exports = LoginForm
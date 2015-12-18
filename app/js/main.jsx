import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link } from 'react-router';
import App from './components/app';

const history = useBasename(createHistory)({
	basename: '/'
});

class SignedIn extends React.Component {
  render() {
    return (
      <div>
        <h2>Signed In</h2>
        {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <h3>Welcome home!</h3>
    )
  }
}

class SignedOut extends React.Component {
  render() {
    return (
      <div>
        <h2>Signed Out</h2>
        {this.props.children}
      </div>
    )
  }
}

class SignIn extends React.Component {
  render() {
    return (
      <h3>Please sign in.</h3>
    )
  }
}

class ForgotPassword extends React.Component {
  render() {
    return (
      <h3>Forgot your password?</h3>
    )
  }
}

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: require('./components/app'),
		childRoutes: [
			require('./routes/products')
		]
	}]
}

render(
	<Router history={history} routes={rootRoute} />,
	document.getElementById('nav')
)

// ReactDOM.render(<Nav />, document.getElementById('nav'));

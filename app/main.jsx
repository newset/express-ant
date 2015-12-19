import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link } from 'react-router';
import App from './components/app';

const history = useBasename(createHistory)({
	basename: '/'
});

class Home extends React.Component {
  render() {
    return (
      <h3>Welcome home!</h3>
    )
  }
}

const rootRoute = {
	component: 'div',
	childRoutes: [{
		path: '/',
		component: require('./components/app'),
		childRoutes: [
			require('./routes/products'),
      require('./routes/login')
		]
	}]
}

render(
	<Router history={history} routes={rootRoute} />,
	document.getElementById('nav')
)

// ReactDOM.render(<Nav />, document.getElementById('nav'));

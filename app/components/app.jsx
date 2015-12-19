import React from 'react';
import {Nav} from './navbar';
import { Link } from 'react-router';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Nav />
// 				<div className="content"></div>
// 			</div>
// 		)
// 	}
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li><Link to="/products" activeClassName="active">Home</Link></li>
          <li><Link to="/login" activeClassName="active">Sign in</Link></li>
        </ol>
        {this.props.children}
      </div>
    )
  }
}

// export default App;
module.exports = App;

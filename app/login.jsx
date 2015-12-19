import app from './components/common';
import App from './components/app';
import {Login, Demo} from './components/login';
import ReactDOM from 'react-dom';
import React from 'react';

app.init();

ReactDOM.render(<Login />, document.getElementById('form'));
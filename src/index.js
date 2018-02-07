import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));

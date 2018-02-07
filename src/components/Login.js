import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.username = '';
  }

  onChange(event) {
    this.username = event.target.value;
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onChange}/>
        <button onClick={() => { this.props.login(this.username) }}>Login</button>
      </div>
    );
  }
};

export default connect(state => state, { login: login })(Login);
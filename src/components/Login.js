import React, { Component } from 'react';

export default class Login extends Component {
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
        <input onChange={this.onChange}/>
        <button onClick={() => { this.props.login(this.username) }}>Login</button>
      </div>
    );
  }
}
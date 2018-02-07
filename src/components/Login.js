import React, { Component } from 'react';
import styles from 'styled-components';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Background = styles.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e0f1f9;
  padding: 20px;
`;

const Container = styles.div`
  background-color: white;
  width: 256px;
  padding: 40px;
  border-radius: 40px;
  opacity: 0.95;
`;

const Logo = styles.div`
  background-image: url("https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/icloud-4nav-button-icon.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const Button = styles.button`
  width: 212px;
  padding: 5px 20px;
  font-weight: 400;
  font-size: 14px;
  color: #9d9e9e;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
  background: #fff;
  border: 1px solid #fff;
  border-radius: 0 0 3px 3px;
`;

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

      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <Background>
          <Container>
            <Logo />
            <TextField hintText="Username" />
            <RaisedButton style={{width: '256px', marginTop: '10px'}} label="Login" onClick={() => { this.props.login(this.username) }}/>
          </Container>
        </Background>
      </MuiThemeProvider>
    );
  }
};

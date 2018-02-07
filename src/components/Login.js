import React, { Component } from 'react';
import styles from 'styled-components';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Background = styles.div`
  margin: 0;
  padding: 0;
`;

const Wrapper = styles.div`
  width: 358px;
  height: 358px;
  margin: 30px auto;
`;

const Container = styles.div`
  background-color: white;
  width: 256px;
  border-radius: 40px;
  padding: 50px;
  border: 1px solid #bbb;
`;

const Logo = styles.div`
  background-image: url("https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/icloud-4nav-button-icon.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  margin: 0 auto;
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
            <TextField onChange={this.onChange} hintText="Username" underlineFocusStyle={{borderColor:'#1289fe'}}/>
            <RaisedButton style={{width: '256px', marginTop: '10px'}} label="Login" onClick={() => { this.props.login(this.username) }}/>
          </Container>
        </Background>
      </MuiThemeProvider>
    );
  }
};

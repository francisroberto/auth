import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDD230wcj1A1b4ZLXwm8bbfg6pElhvKRnA',
    authDomain: 'authentication-21810.firebaseapp.com',
    databaseURL: 'https://authentication-21810.firebaseio.com',
    projectId: 'authentication-21810',
    storageBucket: 'authentication-21810.appspot.com',
    messagingSenderId: '253263691429'
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

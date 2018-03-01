import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { text: '', j: '' };
  render() {
    return (
      <Card>
        <CardSection> 
          <Input
            xlabel="Email"
            xvalue={this.State.text}
            xonChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;

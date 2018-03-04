import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            xplaceholder="user@gmail.com"
            xlabel="Email"
            xvalue={this.state.email}
            xonChangeText={email => this.setState({ email })} //same with xonChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            xsecureTextEntry
            xplaceholder="password"
            xlabel="Password"
            xvalue={this.state.password}
            xonChangeText={text => this.setState({ password: text })}
          />
        </CardSection>

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

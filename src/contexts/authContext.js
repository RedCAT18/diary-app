import React, { Component, createContext } from 'react';

const Context = new createContext();

const { Provider, Consumer: AuthConsumer } = Context;

class AuthProvider extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false
  };

  actions = {
    setUserInfo: value => {
      console.log(value.email);
      const { email, password } = value;
      this.setState({
        email,
        password
      });
      console.log(this.state);
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

//HoC
function useAuthContext(WrappedComponent) {
  return function UseAuthContext(props) {
    return (
      <AuthConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            value={state.value}
            setUserInfo={actions.setUserInfo}
          />
        )}
      </AuthConsumer>
    );
  };
}

export { AuthProvider, AuthConsumer, useAuthContext };

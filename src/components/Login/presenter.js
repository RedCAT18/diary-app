import React, { Component } from 'react';
import styles from './login.scss';
import { useAuthContext } from '../../contexts/authContext';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  _handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    const { email, password } = this.state;
    this.props.setUserInfo({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.login}>
        <form className={styles.login__form} onSubmit={this._handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            className={styles.login__input}
            placeholder="Email"
            onChange={this._handleInput}
          />
          <input
            type="password"
            name="password"
            value={password}
            className={styles.login__input}
            placeholder="Password"
            onChange={this._handleInput}
          />
          <button className={styles.login__submit}>Login</button>
        </form>
        <p className={styles.login__find}>Forgot password?</p>
      </div>
    );
  }
}

export default useAuthContext(Login);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../actions/authActions';

import Alert from './Alert';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  fieldChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value,
      alert: {
        type: '',
        message: ''
      } 
    });
  }

  formSubmit = (event) => {
    event.preventDefault();

    const authData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.authenticate(authData);
  }

  render() {
    return (
      <div className={'container pt-3'}>
            <span className={'text-center'}>
              <h1>Login</h1>
            </span>
            <div className={'row'}>
            <div className={'col-md-3 col-lg-3'}></div>
            <div className={'col-md-6 col-lg-6'}>
              {this.props.message && 
                <Alert type={'info'} message={this.props.message} />
              }
              <form className={'form'} onSubmit={this.formSubmit}>
                <div className={'form-group'}>
                  <label htmlFor={'username'}>Username</label>
                  <input
                    id={'username'} 
                    type={'text'} 
                    name={'username'} 
                    placeholder={'Username'}
                    autoComplete={'off'} 
                    className={'form-control'}
                    value={this.state.username}
                    onChange={this.fieldChange}
                    required
                  />
                </div>
                <div className={'form-group'}>
                  <label htmlFor={'password'}>Password</label>
                  <input 
                    id={'password'} 
                    type={'password'} 
                    name={'password'} 
                    placeholder={'Password'} 
                    autoComplete={'off'}
                    className={'form-control'}
                    value={this.state.password}
                    onChange={this.fieldChange}
                    required
                  />
                </div>
                <div className={'pt-2'}>
                  <button type={'submit'} className={'btn btn-success'}>
                    <span className={'px-2'}>Login</span>
                  </button>
                </div>
              </form>
            </div>
            <div className={'col-md-3 col-lg-3'}></div>
            </div>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  message: PropTypes.string
};

const mapStateToProps = state => ({
  authenticated: state.authenticate.authenticated,
  username: state.authenticate.username,
  password: state.authenticate.password,
  message: state.authenticate.message
});

export default connect(mapStateToProps, { authenticate })(Login);
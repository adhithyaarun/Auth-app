import React, { Component } from 'react';
import { HOME, LOGIN } from '../constants/url';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={'navbar navbar-expand-lg navbar-dark bg-dark'}>
          <a className={'navbar-brand'} href={HOME}>Auth App</a>
          <button className={'navbar-toggler'} type={'button'} data-toggle={'collapse'} data-target={'#navbarToggler'} aria-controls={'navbarToggler'} aria-expanded={'false'} aria-label={'Toggle navigation'}>
            <span className={'navbar-toggler-icon'}></span>
          </button>

          <div className={'collapse navbar-collapse'} id={'navbarToggler'}>
            <ul className={'navbar-nav ml-auto mt-2 mt-lg-0'}>
              <li className={'nav-item active'}>
                <a className={'nav-link'} href={LOGIN}>Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
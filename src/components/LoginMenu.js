import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';

class LoginMenu extends Component {
    render() {
        return (
                <ul className='login-menu'>
                    <li className='menu-button'>Zaloguj</li>
                    <li className='register-button'>Załóż konto</li>
                </ul>
        )
    }
}

export default LoginMenu;
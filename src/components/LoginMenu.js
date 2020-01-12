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
                    <li>
                        <Link to='/logowanie' className='menu-button'>Zaloguj</Link>
                    </li>
                    <li>
                        <Link to='/rejestracja' className='register-button'>Załóż konto</Link>
                    </li>
                </ul>
        )
    }
}

export default LoginMenu;
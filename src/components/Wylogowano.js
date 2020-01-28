import React, { Component } from 'react';
import Decoration from '../assets/Decoration.svg';
import Home from './Home';
import LoginMenu from './LoginMenu';
import Menu from './Menu';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';

class Wylogowano extends Component {
  render() {
    return (
      <>
        <LoginMenu />
        <Menu />
          <div className='logged-out'>
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img src={Decoration} alt={'decoration-item'} />
            <Link to='/start' className='main-page-button'>Strona główna</Link>
          </div>
      </>    
    )
  }
}
export default Wylogowano;
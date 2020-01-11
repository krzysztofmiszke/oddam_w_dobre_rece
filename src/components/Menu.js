import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Link from 'react-scroll';

class Menu extends Component {
    render() {
        return (
                <ul className='menu'>
                    <li className='start-button'>Start</li>
                    <li className='menu-button'>O co chodzi?</li>
                    <li className='menu-button'>O nas</li>
                    <li className='menu-button'>Fundacja i organizacje</li>
                    <li className='menu-button'>Kontakt</li>
                </ul>
        )
    }
}

export default Menu;
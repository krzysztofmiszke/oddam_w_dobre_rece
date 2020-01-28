import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

const options = {
    activeClass:"start-button",
    spy: true, 
    smooth: true,
    offset: 50,
    duration: 500
}

class Menu extends Component {
    render() {
        return (
                <ul className='menu'>
                    <li>
                        <LinkScroll to='start' to='/start' className='menu-button' {...options}>Start</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='o-co-chodzi' className='menu-button'{...options}>O co chodzi?</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='o-nas' className='menu-button' {...options}>O nas</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='fundacja-i-organizacje' className='menu-button' {...options}>Fundacja i organizacje</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='kontakt' className='menu-button' {...options}>Kontakt</LinkScroll>
                    </li>
                </ul>
        )
    }
}

export default Menu;
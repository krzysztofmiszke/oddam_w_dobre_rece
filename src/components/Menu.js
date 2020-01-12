import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { 
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

class Menu extends Component {
    render() {
        return (
                <ul className='menu'>
                    <li>
                        <LinkScroll to='start' className='start-button'>Start</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='o-co-chodzi' className='menu-button'>O co chodzi?</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='o-nas' className='menu-button'>O nas</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='fundacja-i-organizacje' className='menu-button'>Fundacja i organizacje</LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to='kontakt' className='menu-button'>Kontakt</LinkScroll>
                    </li>
                </ul>
        )
    }
}

export default Menu;
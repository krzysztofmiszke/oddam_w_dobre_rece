import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { 
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import Link from 'react-scroll';
import LoginMenu from './LoginMenu';
import Menu from './Menu';
import Footer from './Footer';

class Kontakt extends Component {
    render() {
        return (
            <div>
                <div id='kontakt'>
                    <div className='kontakt-left-side'></div>
                    <div className='kontakt-right-side'>
                        <div className='kontakt-header'>Skontaktuj się z nami</div>
                        <div className='decoration-image'></div>
                        <form className='kontakt-form'>
                            <div className='kontakt-first-row'>
                                <label><b>Wpisz swoje imię</b><br></br>
                                    <input className='kontakt-input' type='name' name='Wpisz swoje imię' placeholder='Imie'></input>
                                </label> 
                                <label><b>Wpisz swój email</b><br></br>
                                    <input className='kontakt-input' type='mail' name='Wpisz swój email' placeholder='email@gmail.com'></input>
                                </label>
                            </div>
                            <div className='kontakt-second-row'>
                                <label><b>Wpisz swoją wiadomość</b><br></br>
                                    <input type='text' 
                                        name='Wpisz swoją wiadomość' 
                                        className='kontakt-input-description' 
                                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                        proident, sunt in culpa qui officia deserunt mollit anim id 
                                        est laborum.'>
                                    </input>
                                </label>
                            </div>
                            <div className='submit-button-position'>
                                <button className='submit-button'>Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>   
        )
    }
}

export default Kontakt;
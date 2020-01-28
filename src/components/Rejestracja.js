import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';
import Decoration from '../assets/Decoration.svg'; 
import LoginMenu from './LoginMenu';
import Menu from './Menu';

class Rejestracja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loginInputs: {
                name: '',
                email: '',
                message: '',
                password: '',
                confirmPassword: ''
            },
            loginErrors: {},
            success: ''
        }
    }

    change = ({ target }) => {
        this.setState(prevState => ({
            loginInputs: {
                ...prevState.loginInputs,
                [target.name]: target.value
            }
        }));
    }
    validation() {
        // return true
        // if uncomment return true -> then receive answer from server
        let loginInputs = this.state.loginInputs;
        let loginErrors = {};
        let formIsValid = true;
        
        if(!loginInputs['email']){
            formIsValid = false;
            loginErrors['email'] = 'Podany email jest nieprawidłowy';
         }
 
         if(typeof loginInputs['email'] !== 'undefined'){
            let atOnTheLastPosition = loginInputs['email'].lastIndexOf('@');
            let dotOnTheLastPosition = loginInputs['email'].lastIndexOf('.');
 
            if(!(atOnTheLastPosition < dotOnTheLastPosition && atOnTheLastPosition > 0 && loginInputs['email'].indexOf('@@') == -1 && dotOnTheLastPosition > 2 && (loginInputs['email'].length - dotOnTheLastPosition) > 2)) {
               formIsValid = false;
               loginErrors['email'] = 'Email jest nieprawidłowy';
             }
        }
        
        if(!loginInputs['password']) {
            formIsValid = false;
            loginErrors['password'] = 'Hasło musi mieć co najmniej 6 znaków!';
        }

        if(typeof loginInputs['password'] !== 'undefined') {
            if(loginInputs['password'].length < 6) {
                formIsValid = false;
                loginErrors['password'] = 'Hasło musi składać się co najmniej z 6 znaków!';
            }
        }

        if(!loginInputs['confirmPassword']) {
            formIsValid = false;
            loginErrors['confirmPassword'] = 'Hasło nie jest takie samo jak wyżej';
        }

        if(typeof loginInputs['confirmPassword'] !== 'undefined') {
            if(loginInputs['password'] !== loginInputs['confirmPassword']) {
                formIsValid = false;
                loginErrors['confirmPassword'] = 'Hasło nie jest takie samo jak wyżej';
            }
        }

        this.setState({loginErrors: loginErrors});
        return formIsValid;
    }

    Submit(e) {
        e.preventDefault(); 
        console.log(this.state.loginInputs)
        if(this.validation()) {
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: 'POST',
                body: JSON.stringify(this.state.loginInputs),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    this.setState({loginErrors: {}, success: 'Wiadomość została wysłana! \n Wkrótce się skontaktujemy!'});
                } else {
                    const loginErrors ={}
                    for (let loginError in res.loginErrors) {
                        loginErrors[loginError.param] = loginError.msg
                    }
                    this.setState({loginErrors})
                }
            })
        } else {
            // console.log('Formularz posiada błędy.');
        }
    }


    render() {
        return (
        <>
        <LoginMenu />
        <Menu />
            <div className='rejestracja'>
                <h2>Załóż konto</h2>
                <img src={Decoration} alt='decoration-item' />
                <form className='register-form'>
                    <div className='register-panel'>
                        <label><b>Email</b></label>
                        <input 
                            className='register-input' 
                            type='mail' 
                            name='email' 
                            placeholder='' 
                            onChange={this.change} 
                            value={this.state.loginInputs.email} 
                        /><br></br>
                        <span style={{color: 'red'}}> {this.state.loginErrors['email']} </span>

                        <label><b>Hasło</b></label>
                        <input 
                            className='register-input' 
                            type='password' 
                            name='password' 
                            placeholder='' 
                            onChange={this.change} 
                            value={this.state.loginInputs.password} 
                        /><br></br>
                        <span style={{color: 'red'}}> {this.state.loginErrors['password']} </span>

                        <label><b>Powtórz hasło</b></label>
                        <input 
                            className='register-input' 
                            type='password' 
                            name='confirmPassword'
                            placeholder='' 
                            onChange={this.change} 
                            value={this.state.loginInputs.confirmPassword} 
                        /><br></br>
                        <span style={{color: 'red'}}> {this.state.loginErrors['confirmPassword']} </span>
                    </div>
                </form>   
                <div className='buttons-row'>
                    <li>
                        <Link to='/rejestracja' className='sign-up-button'>Załóż konto</Link>
                    </li>
                    <li onClick={this.Submit.bind(this)}>
                        <Link className='sign-in-button'>Zaloguj się</Link>
                    </li>
                </div>
            </div>
        </>
        )
    }
}
export default Rejestracja;
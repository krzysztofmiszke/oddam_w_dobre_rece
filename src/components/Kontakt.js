import React, { Component } from 'react';
import LoginMenu from './LoginMenu';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Kontakt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            inputs: {
                name: '',
                email: '',
                message: ''
            },
            errors: {},
            success: ''
        }
    }

    change = ({ target }) => {
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [target.name]: target.value
            }
        }));
    }
    validation() {
        // return true
        // if uncomment return true -> then receive answer from server
        let inputs = this.state.inputs;
        let errors = {};
        let formIsValid = true;
        
        if(!inputs['name']) {
            formIsValid = false;
            errors['name'] = "Podane imię jest nieprawidłowe";
        }

        if(typeof inputs['name'] !== 'undefined') {
            if(!inputs['name'].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors['name'] = 'Imię powinno być jednym wyrazem';
            }
        }

        if(!inputs['email']){
            formIsValid = false;
            errors['email'] = 'Podany email jest nieprawidłowy';
         }
 
         if(typeof inputs['email'] !== 'undefined'){
            let atOnTheLastPosition = inputs['email'].lastIndexOf('@');
            let dotOnTheLastPosition = inputs['email'].lastIndexOf('.');
 
            if(!(atOnTheLastPosition < dotOnTheLastPosition && atOnTheLastPosition > 0 && inputs['email'].indexOf('@@') == -1 && dotOnTheLastPosition > 2 && (inputs['email'].length - dotOnTheLastPosition) > 2)) {
               formIsValid = false;
               errors['email'] = 'Email jest nieprawidłowy';
             }
        }
        
        if(!inputs['message']) {
            formIsValid = false;
            errors['message'] = 'Wiadomość musi mieć co najmniej 120 znaków';
        }

        if(typeof inputs['message'] !== 'undefined') {
            if(inputs['message'].length < 120) {
                formIsValid = false;
                errors['message'] = 'Wiadomość musi mieć co najmniej 120 znaków';
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    Submit(e) {
        e.preventDefault(); 
        console.log(this.state.inputs)
        if(this.validation()) {
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: 'POST',
                body: JSON.stringify(this.state.inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(res => {
                if (res.status === 'success') {
                    this.setState({errors: {}, success: 'Wiadomość została wysłana! \n Wkrótce się skontaktujemy!'});
                } else {
                    const errors ={}
                    for (let error of res.errors) {
                        errors[error.param] = error.msg
                    }
                    this.setState({errors})
                }
            })
        } else {
            // console.log('Formularz posiada błędy.');
        }
    }
    
    render() {
        return (
            <div>
                <div id='kontakt'>
                    <div className='kontakt-left-side'></div>

                    <div className='kontakt-right-side'>
                        <div className='kontakt-header'>Skontaktuj się z nami</div>
                        
                        <div className='decoration-image'></div>
                        
                        <span style={{color: 'green', fontWeight: 'bold'}}> 
                            {this.state.success.split('\n').map(function(item, key) {
                                return <span key={key}>{item}<br/></span>
                            })} 
                        </span>

                        <form className='kontakt-form' onSubmit={this.Submit.bind(this)}>
                            <div className='kontakt-first-row'>
                                <label><b>Wpisz swoje imię</b><br></br>
                                    <input 
                                        className='kontakt-input' 
                                        type='text' 
                                        name='name' 
                                        placeholder='Imie' 
                                        onChange={this.change} 
                                        value={this.state.inputs.name} 
                                    /><br></br>
                                    <span style={{color: 'red'}}> {this.state.errors['name']} </span>
                                </label> 
                                
                                <label><b>Wpisz swój email</b><br></br>
                                    <input 
                                        className='kontakt-input' 
                                        type='mail' 
                                        name='email' 
                                        placeholder='email@gmail.com' 
                                        onChange={this.change} 
                                        value={this.state.inputs.email} 
                                    /><br></br>
                                    <span style={{color: 'red'}}> {this.state.errors['email']} </span>
                                </label>
                            </div>

                            <div className='kontakt-second-row'>
                                <label><b>Wpisz swoją wiadomość</b><br></br>
                                    <input type='text' 
                                        name='message' 
                                        className='kontakt-input-description' 
                                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod tempor..' 
                                        onChange={this.change}
                                        value={this.state.inputs.message}
                                    /><br></br>
                                    <span style={{color: 'red'}}> {this.state.errors['message']} </span>
                                    
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
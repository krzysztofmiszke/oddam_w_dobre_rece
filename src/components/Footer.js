import React, { Component } from 'react';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='copyright'>Copyright by Coders Lab</div>
        <div className='social-icons'>
          <div className='ico'><img src={Facebook} alt='facebook.svg' /></div>
          <div className='ico'><img src={Instagram} alt='instagram.svg' /></div>
        </div>
      </div>
    )
  }
}

export default Footer;
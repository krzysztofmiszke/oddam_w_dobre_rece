import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { 
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import { Link } from 'react-router-dom';

class OcoChodzi extends Component {
    render() {
        return (
            <div id='o-co-chodzi'>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className='decoration-image'></div>
                <div className='icons'>
                    <div className='first-icon'>
                        <div className='first-icon-bg'></div>
                        <div>Wybierz rzeczy<hr></hr>Ubrania, zabawki, sprzęt i inne</div>
                    </div>
                    <div className='second-icon'>
                        <div className='second-icon-bg'></div>
                        <div>Spakuj je<hr></hr>skorzystaj z worków na śmieci</div>
                    </div>
                    <div className='third-icon'>
                        <div className='third-icon-bg'></div>
                        <div>Zdecyduj komu chcesz pomóc<hr></hr>wybierz zaufane miejsce</div>                   
                    </div>
                    <div className='fourth-icon'>
                        <div className='fourth-icon-bg'></div>
                        <div>Zamów kuriera<hr></hr>kurier przyjedzie w dogodnym terminie</div>                 
                    </div>
                </div>
                <Link to='/logowanie' className='main-button-o-co-chodzi'>ODDAJ <br/> RZECZY</Link>
            </div>
        )
    }
}

export default OcoChodzi;
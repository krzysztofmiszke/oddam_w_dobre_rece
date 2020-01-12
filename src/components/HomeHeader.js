import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class HomeHeader extends Component {
    render() {
        return (
            <div className='home-header'>
                <div className='text-and-decoration'>
                    <p>
                        Zacznij pomagać! <br/> 
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                    <div className='decoration-image'></div>
                    <div className='buttons'>
                        {/* <button className='main-button'>ODDAJ <br/> RZECZY</button>
                        <button className='main-button'>ZORGANIZUJ <br/> ZBIÓRKĘ</button> */}
                        <Link to='/logowanie' className='main-button'>ODDAJ <br/> RZECZY</Link>
                        <Link to='/logowanie' className='main-button'>ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default HomeHeader;
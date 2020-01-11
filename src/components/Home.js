import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Menu from './Menu';
import LoginMenu from './LoginMenu';

class Home extends Component {
    render() {
        return (
            <div>
                <LoginMenu />
                <Menu />
                <HomeHeader />
                <HomeThreeColumns />
            </div>
        )
    }
}

export default Home;
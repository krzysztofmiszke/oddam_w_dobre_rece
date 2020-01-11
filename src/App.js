import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

export default App;

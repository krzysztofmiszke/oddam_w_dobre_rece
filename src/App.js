import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';

import Home from './components/Home';
import Logowanie from './components/Logowanie';
import Rejestracja from './components/Rejestracja';
// import OcoChodzi from './components/OcoChodzi';
// import Onas from './components/Onas';
// import Fundacja from './components/Fundacja';
// import Kontakt from './components/Kontakt';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/logowanie' component={Logowanie} />
          <Route path='/rejestracja' component={Rejestracja} />
          {/* <Route path='/start' component={Home} />
          <Route path='/o-co-chodzi' component={OcoChodzi} />
          <Route path='/o-nas' component={Onas} />
          <Route path='/fundacja-i-organizacje' component={Fundacja} />
          <Route path='/kontakt' component={Kontakt} /> */}
        </div>
      </Router>
    )
  }
}

export default App;

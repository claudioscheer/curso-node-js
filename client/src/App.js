import React from 'react';

import Users from './components/user/Users';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;

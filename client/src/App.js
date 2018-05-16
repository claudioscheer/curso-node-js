import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Users from './components/user/Users';
import EditUser from './components/user/EditUser';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Users} />
            <Route exact={true} path="/user/:id?" component={EditUser} />            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

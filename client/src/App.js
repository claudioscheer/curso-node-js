import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Usuarios from './components/Usuarios';
import EditarUsuario from './components/EditarUsuario';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path="/" component={Usuarios} />
            <Route exact={true} path="/usuario/:codigo?" component={EditarUsuario} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, {useContext} from 'react';
import { Redirect } from 'react-router';
import {AuthContext} from './context/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Rings from './media/rings.svg'

function App() {
  const {user, isFetching} = useContext(AuthContext);
  if(isFetching)
    return <img className="h-screen w-screen" src = {Rings} alt = "Loading"/>

  const isAuthenticated = user != null;
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route
          path = '/signup'
          render = {(props)=>
            !isAuthenticated ? <Signup {...props} /> : <Redirect to ='/'/>
          }
        />
        <Route
          path = '/login'
          render = {(props)=>
            !isAuthenticated ? <Login {...props} /> : <Redirect to ='/'/>
          }
        />
      </Switch>
    </Router>
  );
}

export default App;

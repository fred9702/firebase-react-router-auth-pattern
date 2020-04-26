import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </Router>
    </AuthProvider>
  );
}

export default App;

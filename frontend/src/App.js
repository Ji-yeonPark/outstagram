import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Route component={RegisterPage} path={["/register", "/"]} exact />
      <Route component={LoginPage} path="/login" />
    </>
  );
}

export default App;

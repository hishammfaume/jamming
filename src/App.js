import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const client_id ='02056911242d494da531c50dbe0f27e7';
const client_secret = 'fabed1ee281f4d63b29e85da79ca14c4';

function App() {

  useEffect(() => {
    //API access token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to our jamming session.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

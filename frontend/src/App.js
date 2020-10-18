import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    const makeApiRequest = async () => {
        const request = await axios.get('/api/testcurrentuser');
        console.log(request);
    };

    return (


        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <strong>Hello from docker</strong>
                <button onClick={makeApiRequest}>Make api request</button>

            </header>
        </div>
    );
}

export default App;

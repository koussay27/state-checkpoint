import './App.css';
import React, { Component, useState } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome'; 
import Message from './component/Message';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Message />
            </div>
        )
    }
}


export default App;
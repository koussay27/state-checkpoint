import React, { Component, useState } from 'react';
import Greet from './Greet';
import Welcome from './Welcome'

class Message extends Component {
    state={
        fullName:"hey visitor"
    }
    state={
        bio:"and who are you?"
    }
    state={
        profession:"and what is your profession?"
    }
    render () {
        return (
            <div>
                
                 <h1> {this.state.fullName} </h1>
                <button onClick={()=> this.setState({fullName:"Hi I m Koussay Moujahed"})}>Show name</button>
                <h2> {this.state.bio} </h2>
                <button onClick={()=> this.setState({bio:"I m a 16 y.o boy who loves anime"})}>Show who are you</button>
                <h3>{this.state.profession} </h3>
                <button onClick={()=> this.setState({profession:"a student in GoMyCode"})}>show me what's ur profession</button>
            </div>
        )

        
    }
}

export default Message;
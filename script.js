import React from 'react';
import ReactDOM from 'react-dom';
class MyStyling extends React.Component(){
    render(){
        const myheadername={
            color: "green", 
            backgroundColor: "skyblue",
            fontFamily: "Arial",
            padding: "5px"
        };
        const mystyle={
            color: "blue",
            backgroundColor: "pink",
            fontFamily: "Times New Roman",
            padding: "10px"
        }        
        return (
            <div>
                <h1 style={myheadername}>Hi!!</h1>
                <p style={mystyle}>How are you</p>
            </div>
        );    
    }

    }
    ReactDOM.render(<MyStyling />,document.getElementById('root'));

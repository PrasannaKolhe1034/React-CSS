import React from "react";
import ReactDOM from "react-dom";
import './src.css'
class MyStyling extends React.Component(){
    render(){
        return(
            <div>
                <h1 className="myheadername">Hi</h1>
                <p className="mystyle">How are you</p>
            </div>
          
        );
    }
}
ReactDOM.render(<MyStyling />,document.getElementById('root'))

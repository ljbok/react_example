import React, {Component} from "react";
import {add} from './actions' // actions > index.js >> add() 메소드 임포트

class StrAddButton extends Component {
    render() {
        return (
            <input 
                value="Add200" 
                type="button" 
                onClick={this.addString}    
            />
        )
    }

    addString = () => {
        this.props.store.dispatch(add());
    }
}

export default StrAddButton;
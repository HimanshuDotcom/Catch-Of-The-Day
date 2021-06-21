import React from 'react';
import {Link} from 'react-router-dom';
import {getFunName} from '../helpers.js'

class StorePicker extends React.Component {

    myInput = React.createRef();

     gotToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);   
    }
    
    render() {
        return (
            <form className = "store-selector" onSubmit = {this.gotToStore}>
                <h1>Please Enter a Store</h1>
                <input type= "text" 
                required placeholder = "Enter Store"
                defaultValue = {getFunName()}
                ref = {this.myInput}            
                />
                <button type = "submit">Visit Store </button>
            </form>
        )
    }
}

export default StorePicker;
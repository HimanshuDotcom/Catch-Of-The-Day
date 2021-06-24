import React from 'react';

class EditFish extends React.Component {

    handleChange = (e) => {
        const updateFish = {...this.props.fish, [e.target.name]: e.target.value};
        this.props.updateFish(this.props.index, updateFish);
    }
    render() {
        return (
            <form className = "fish-edit">
                <input type = "text" name= "name" placeholder = "name" value = {this.props.fish.name} onChange = {this.handleChange} />
                <input type = "text" name= "price" placeholder = "Price" value = {this.props.fish.price} onChange = {this.handleChange} />
                <select name="status" value = {this.props.fish.status} onChange = {this.handleChange} >
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name= "desc" placeholder = "Desc" value = {this.props.fish.desc} onChange = {this.handleChange} />
                <input type = "text" name= "image" placeholder = "Image" value = {this.props.fish.image} onChange = {this.handleChange} />
                <button  onClick = {() => this.props.removeFish(this.props.index)}>Remove Fish</button>
            </form>
        )
    }
}

export default EditFish;
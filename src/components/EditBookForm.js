import React from 'react';

class EditBook extends React.Component {

    handleChange = (e) => {
        const updatebook = {...this.props.book, [e.target.name]: e.target.value};
        this.props.updateBook(this.props.index, updatebook);
    }
    render() {
        return (
            <form className = "fish-edit">
                <input type = "text" name= "name" placeholder = "name" value = {this.props.book.name} onChange = {this.handleChange} />
                <input type = "text" name= "price" placeholder = "Price" value = {this.props.book.price} onChange = {this.handleChange} />
                <select name="status" value = {this.props.book.status} onChange = {this.handleChange} >
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name= "desc" placeholder = "Desc" value = {this.props.book.desc} onChange = {this.handleChange} />
                <input type = "text" name= "image" placeholder = "Image" value = {this.props.book.image} onChange = {this.handleChange} />
                <button  onClick = {(e) => {
                    e.preventDefault();
                    this.props.removeBook(this.props.index)
                }}>Remove Item</button>
            </form>
        )
    }
}

export default EditBook;
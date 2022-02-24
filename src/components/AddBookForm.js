import React from 'react';

class AddBook extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createBook = e => {
        e.preventDefault();
        const book = {
            name: this.nameRef.current.value,    
            price: parseFloat(this.priceRef.current.value),    
            status: this.statusRef.current.value,    
            desc: this.descRef.current.value,    
            image: this.imageRef.current.value,    
        }
        this.props.addBook(book);
        e.currentTarget.reset();
    }


    render() {
        return (
            <>
            <form className = "fish-edit" onSubmit = {this.createBook}>
                <input type = "text" name= "name" placeholder = "name" ref = {this.nameRef} />
                <input type = "text" name= "price" placeholder = "Price" ref = {this.priceRef} />
                <select name="status" ref = {this.statusRef}>
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name= "desc" placeholder = "Desc" ref = {this.descRef} />
                <input type = "text" name= "image" placeholder = "Image" ref = {this.imageRef} />
                <button type="submit">+ Add Item</button>
            </form>

            </>
        )
    }
}

export default AddBook;
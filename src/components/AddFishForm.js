import React from 'react';

class AddFish extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,    
            price: parseFloat(this.priceRef.current.value),    
            status: this.statusRef.current.value,    
            desc: this.descRef.current.value,    
            image: this.imageRef.current.value,    
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    }


    render() {
        return (
            <>
            <form className = "fish-edit" onSubmit = {this.createFish}>
                <input type = "text" name= "name" placeholder = "name" ref = {this.nameRef} />
                <input type = "text" name= "price" placeholder = "Price" ref = {this.priceRef} />
                <select name="status" ref = {this.statusRef}>
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name= "desc" placeholder = "Desc" ref = {this.descRef} />
                <input type = "text" name= "image" placeholder = "Image" ref = {this.imageRef} />
                <button type="submit">+ Add Fish</button>
            </form>
            <button onClick = {this.props.loadSampleFishes}>Load Sample Fishes</button>

            </>
        )
    }
}

export default AddFish;
import React from 'react';
import AddBook  from './AddBookForm';
import EditBook from './EditBookForm';


class Inventory extends React.Component {

    renderEditBook = (key) => {
        return <EditBook
                    key = {key} 
                    index = {key}
                    book = {this.props.books[key]}
                    books = {this.props.books} 
                    updateBook = {this.props.updateBook}
                    removeBook = {this.props.removeBook}
                />
    }

    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {
                    Object.keys(this.props.books).map(this.renderEditBook)
                }
                <AddBook addBook = {this.props.addBook} loadSampleBooks = {this.props.loadSampleBooks}/>
            </div>
        );
    }
}

export default Inventory;
import React from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory';
import books from '../sample-books';
import Book from './Book';
import base from '../base';

class App extends React.Component {

    state = {
        books: {},
        order: {}
    };

    componentDidMount() {
        // const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        // if(localStorageRef)
        //     this.setState({order: JSON.parse(localStorageRef)});
        // this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
        //     context: this,
        //     state: "fishes"
        // });
        this.setState({
            books: books
        })
    }

    // componentDidUpdate() {
    //     // localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    // }

    // componentWillUnmount() {
    //     // base.removeBinding(this.ref);
    // }

    addBook = book => {
        const books = {...this.state.books};
        books[`book${Date.now()}`] = book;
        this.setState({
            books: books
        })
    }

    updateBook = (key, updatedFish) => {
        // console.log(updatedFish)
        const books = {...this.state.books};
        books[key] = updatedFish;             // why fishes.key is not working
        this.setState({
            books: books
        })
    }

    removeBook = (key) => {
        const books = {...this.state.books};
        delete books[key];
        this.setState({books});
    }

    loadSampleBooks = () => {
        this.setState({
            books: books
        })
    }

    addToOrder = (key) => {
        const orderFishes = this.state.order;
        orderFishes[key] = orderFishes[key] + 1 || 1;
        this.setState({
            order: orderFishes
        })

    }

    removeOrder = (key) => {
        const orderFishes = this.state.order;
        if(orderFishes[key] === 1)
            delete orderFishes[key];
        else
            orderFishes[key] -= 1;
        this.setState({
            order: orderFishes
        })
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Fresh NEW BOOKS"/>
                    <ul className="fishes">
                        {
                            Object.keys(this.state.books).map(
                                key => <Book key = {key} index = {key} details = {this.state.books[key]} addToOrder = {this.addToOrder} />
                            )
                        }
                    </ul>
                </div>
                <Order 
                    books = {this.state.books} 
                    order = {this.state.order} 
                    removeOrder = {this.removeOrder}
                />
                <Inventory 
                    addBook = {this.addBook} 
                    loadSampleBooks = {this.loadSampleBooks} 
                    books = {this.state.books}
                    updateBook = {this.updateBook}
                    removeBook = {this.removeBook}
                />
            </div>
        )
    }
}

export default App;
import React from 'react';
import { formatPrice } from '../helpers';



class Order extends React.Component {

    renderOrder = (key) => {
        const book = this.props.books[key];
        const count = this.props.order[key];
        if(!book || count === 0)
            return null;
        const isAvailable = book.status === 'available';
        if(!isAvailable) {
            return (
                <li key = {key}>
                    Sorry {book ? book.name: 'book'} is no longer available
                </li>
            )
        }
        return (
            <li key = {key}>
                {count} - {book.name} &nbsp;
                <button onClick = {() => this.props.removeOrder(key)}>&times;</button>
                {formatPrice(count * book.price)}  
            </li>
        )
    }

    render() {

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevCount, key) => {
            const count = this.props.order[key];
            const book = this.props.books[key];
            const isAvailable = book && book.status === 'available';
            if(isAvailable)
                return prevCount + (count*book.price);
            return prevCount;
        }, 0)

        return (
            <div className="order-wrap">
                <h2>ORder</h2>
                    <ul className = "order">
                        {orderIds.map(this.renderOrder)}
                    </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;
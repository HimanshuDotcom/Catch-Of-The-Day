import React from 'react';
import { formatPrice } from '../helpers';
import Fish from './Fish';

class Order extends React.Component {

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        if(!fish)
            return null;
        const isAvailable = fish.status === 'available';
        if(!isAvailable) {
            return (
                <li key = {key}>
                    Sorry {fish ? fish.name: 'fish'} is no longer available
                </li>
            )
        }
        return (
            <li key = {key}>
                {count} lbs {fish.name} &nbsp;
                {formatPrice(count * fish.price)}  
            </li>
        )
    }

    render() {

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevCount, key) => {
            const count = this.props.order[key];
            const fish = this.props.fishes[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable)
                return prevCount + (count*fish.price);
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
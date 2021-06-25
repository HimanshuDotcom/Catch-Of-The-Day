import React from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory';
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if(localStorageRef)
            this.setState({order: JSON.parse(localStorageRef)});
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    }

    updateFish = (key, updatedFish) => {
        // console.log(updatedFish)
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;             // why fishes.key is not working
        this.setState({
            fishes: fishes
        })
    }

    removeFish = (key) => {
        const fishes = {...this.state.fishes};
        console.log("ehyyyyyy")
        fishes[key] = null;
        this.setState({fishes});
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: fishes
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
                    <Header tagline = "Fresh Seafood Market"/>
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(
                                key => <Fish key = {key} index = {key} details = {this.state.fishes[key]} addToOrder = {this.addToOrder} />
                            )
                        }
                    </ul>
                </div>
                <Order 
                    fishes = {this.state.fishes} 
                    order = {this.state.order} 
                    removeOrder = {this.removeOrder}
                />
                <Inventory 
                    addFish = {this.addFish} 
                    loadSampleFishes = {this.loadSampleFishes} 
                    fishes = {this.state.fishes}
                    updateFish = {this.updateFish}
                    removeFish = {this.removeFish}
                />
            </div>
        )
    }
}

export default App;
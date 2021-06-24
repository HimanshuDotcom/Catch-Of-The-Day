import React from 'react';
import AddFish  from './AddFishForm';
import EditFish from './EditFishForm';


class Inventory extends React.Component {

    renderEditFish = (key) => {
        return <EditFish 
                    key = {key} 
                    index = {key}
                    fish = {this.props.fishes[key]}
                    fishes = {this.props.fishes} 
                    updateFish = {this.props.updateFish}
                    removeFish = {this.props.removeFish}
                />
    }

    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {
                    Object.keys(this.props.fishes).map(this.renderEditFish)
                }
                <AddFish addFish = {this.props.addFish} loadSampleFishes = {this.props.loadSampleFishes}/>
            </div>
        );
    }
}

export default Inventory;
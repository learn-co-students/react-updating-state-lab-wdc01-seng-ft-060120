// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    incrementClicks = () => {
        let newNumber = this.state.timesClicked + 1 
        this.setState({
            timesClicked: newNumber
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    updateTimesClickedByOne = () => {
        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return (
            <button onClick={this.updateTimesClickedByOne}>
                {this.state.timesClicked}
            </button>
        )
    }
}

export default DigitalClicker
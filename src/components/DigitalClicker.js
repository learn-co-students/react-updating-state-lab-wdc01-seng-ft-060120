import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timesClicked: 0
        }
    }

    handleClick = () => {
        this.state.timesClicked = this.state.timesClicked + 1
        this.setState(
            {timesClicked: this.state.timesClicked}
        )
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                {this.state.timesClicked}
                </button>
            </div>
        )
    }
}

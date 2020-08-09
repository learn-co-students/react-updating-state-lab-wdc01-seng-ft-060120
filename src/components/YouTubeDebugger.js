// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    state={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    updateBitrate = () => {
        let newBitrate = 12;
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: newBitrate
            }
        })
    }
            
    updateResolution = () => {
        let newRes = '720p';
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: newRes
                }
            }
        })
    }

            


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.updateBitrate}>Bitrate</button>
                <button className='resolution' onClick={this.updateResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
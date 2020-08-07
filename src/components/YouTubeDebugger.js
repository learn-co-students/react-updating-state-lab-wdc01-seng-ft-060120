// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrateToTwelve = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    changeResolutionTo720p = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button 
                    className='bitrate' 
                    onClick={this.changeBitrateToTwelve}>
                    Bitrate
                </button>

                <button 
                    className='resolution' 
                    onClick={this.changeResolutionTo720p}>
                    Resolution
                </button>
            </div>       
        )
    }
}

export default YouTubeDebugger
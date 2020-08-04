import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super ()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  render() {
    return <div>
      <button onClick={this.handleBitClick} className="bitrate">BITRATE</button>
      <button onClick={this.handleResClick} className="resolution">RESOLUTION</button>
          </div>
  }

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' }
      }
    })
  }
}

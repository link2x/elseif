import React, { Component } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  <div className="twelve columns">
                <LiteYouTubeEmbed id={this.props.videoID} title={this.props.videoTitle} cookie adNetwork />
            </div>
  }
}

export default YoutubePlayer

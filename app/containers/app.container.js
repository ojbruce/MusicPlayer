import React from 'react';
import Sound from 'react-sound';
import Axios from 'axios';


// Import all sub components
import TrackDetails from '../components/trackdetails.component';
import Player from '../components/player.component';
import ProgressBar from '../components/progressbar.component';


// The app class
class AppContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.clientId = '2f98992c40b8edf17423d93bda2e04ab';
        this.state = {
            track: {stream_url: '', title: '', artwork_url: ''},
            tracks: [],
            playStatus: Sound.status.STOPPED,
            elapsed: '00:00',
            total: '00:00',
            position: 0,
            playFromPosition: 0,
            autoCompleteValue: ''
        };
    }

    // Called after component is loaded
    componentDidMount() {
        this.randomTrack();
    }
    
    
    randomTrack() {
        let _self = this;
        
        //Request for a playlist via Soundcloud using a client id
        Axios.get("https://api.soundcloud.com/playlists/254290779?client_id="+this.clientId)
            .then(function (response) {
                const trackLength = response.data.tracks.length;
                const randomNumber = Math.floor((Math.random() * trackLength) + 1);
            
                _self.setState({track: response.data.tracks[randomNumber]});
                console.log(response.data.tracks[randomNumber]);
            })
            .catch(function (err) {
                // If something goes wrong, let us know
                console.log("Load Track Error");
                console.log(err);
            });
    }

    /**
     * Search to change track
     */
    handleChange(event, value) {

        // Update input box
        this.setState({autoCompleteValue: event.target.value});
        let _this = this;

        //Search for song with entered value
        Axios.get("https://api.soundcloud.com/tracks?client_id="+this.clientId+"&q="+value)
          .then(function (response) {
            // Update track state
            _this.setState({tracks: response.data});
          })
          .catch(function (err) {
            console.log("Change Track Error");
            console.log(err);
          });
    }

    /*
     * Change player state when a song is playing
     */
    handleSongPlaying(audio){
         this.setState({  elapsed:  this.formatMilliseconds(audio.position),
                          total:    this.formatMilliseconds(audio.duration),
                          position: audio.position / audio.duration })
    }
    
    /*
     * Find another random track
     */
    handleSongFinished () {
        // Call random Track
        this.randomTrack();
        // Or Call next track
    }

    /*
     * Adds the client id to the Url
     */
    addClientToUrl(url) {
        return url+"?client_id="+this.clientId;
    }


    /*
     * Change state of player
     */
    togglePlay(){
        // Check current playing state
        if(this.state.playStatus === Sound.status.PLAYING){
          // Pause if playing
          this.setState({playStatus: Sound.status.PAUSED})
        } else {
          // Resume if paused
          this.setState({playStatus: Sound.status.PLAYING})
        }
    }

    
    formatMilliseconds(milliseconds) {
        // Format hours
        var hours = Math.floor(milliseconds / 3600000);
        milliseconds = milliseconds % 3600000;

        // Format minutes
        var minutes = Math.floor(milliseconds / 60000);
        milliseconds = milliseconds % 60000;

        // Format seconds
        var seconds = Math.floor(milliseconds / 1000);
        milliseconds = Math.floor(milliseconds % 1000);

        // Return as string
        return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
    }
    
    render() {
        return (
            <div className="musicplayer">
                
                <TrackDetails 
                    title={this.state.track.title} 
                    trackimg={this.state.track.artwork_url}
                    />
                <ProgressBar 
                    position={this.state.position} 
                    elapsed={this.state.elapsed}
                    total={this.state.total}
                    />
                <Player 
                    togglePlay={this.togglePlay.bind(this)}
                    playStatus={this.state.playStatus}
                    />
                <Sound
                    url={this.addClientToUrl(this.state.track.stream_url)}
                    playStatus={this.state.playStatus}
                    onPlaying={this.handleSongPlaying.bind(this)}
                    playFromPosition={this.state.playFromPosition}
                    onFinishedPlaying={this.handleSongFinished.bind(this)}
                    />
            </div>
        );
    }

}

export default AppContainer
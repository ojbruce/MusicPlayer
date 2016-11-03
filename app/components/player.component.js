import React from 'react';
import ClassNames from 'classnames'

class Player extends React.Component {

    constructor(props) {
        super(props);
    }    
    
    render() {
        const playPauseClass = ClassNames({
            'fa fa-play-circle-o fa-2x': this.props.playStatus == 'PLAYING' ? false : true,
            'fa fa-pause-circle-o fa-2x': this.props.playStatus == 'PLAYING' ? true : false
        });

        return(
            <div id="player" className="player">
                <div className="player__backward">
                    <button onClick={this.props.previous}>
                        <i className="fa fa-step-backward fa-2x"></i>
                    </button>
                </div>
                
                <div className="player__main">
                  <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
                </div>
                
                <div className="player__forward">
                    <button onClick={this.props.next}>
                        <i className="fa fa-step-forward fa-2x"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default Player
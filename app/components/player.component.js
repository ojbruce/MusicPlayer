import React from 'react';
import ClassNames from 'classnames'

class Player extends React.Component {

    constructor(props) {
        super(props);
    }    
    
    render() {
        const playPauseClass = ClassNames({
            'fa fa-play-circle-o': this.props.playStatus == 'PLAYING' ? false : true,
            'fa fa-pause-circle-o': this.props.playStatus == 'PLAYING' ? true : false
        });

        return(
            <div className="player">
                <div className="player__backward">
                    <button >
                        <i className="fa fa-step-backward"></i>
                    </button>
                </div>
                
                <div className="player__main">
                  <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
                </div>
                
                <div className="player__forward">
                    <button >
                        <i className="fa fa-step-forward"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default Player
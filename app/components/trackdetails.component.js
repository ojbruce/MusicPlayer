import React from 'react';
import ClassNames from 'classnames'

class TrackDetails extends React.Component {
    
    
    // Render
    render(){
        const playingClass = ClassNames({
            'playing': this.props.playStatus == 'PLAYING' ? true : false
        });
        return(
          <div className="trackdetails">
            <img className={playingClass} src={this.props.trackimg} />
            <h3>{this.props.title}</h3>
          </div>
        )
    }
}

// Export
export default TrackDetails
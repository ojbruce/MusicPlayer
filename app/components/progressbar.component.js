import React from 'react';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
    }    
    
  // Render method
  render() {

    return(
      <div className="progress">
        
        <progress
           value={this.props.position}
           max="1"></progress>
         <div className="progresstime">
            <span className="player__time-elapsed">{this.props.elapsed}</span>
            <span className="player__time-total">{this.props.total}</span>
        </div>
      </div>
    )
  }

}

//Export Progress
export default ProgressBar
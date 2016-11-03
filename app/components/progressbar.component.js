import React from 'react';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
    }    
    
  // Render method
  render() {

    return(
      <div className="progress">
        <span className="player__time-elapsed">{this.props.elapsed}</span>
        <progress
           value={this.props.position}
           max="1"></progress>
         <span className="player__time-total">{this.props.total}</span>
      </div>
    )
  }

}

//Export Progress
export default ProgressBar
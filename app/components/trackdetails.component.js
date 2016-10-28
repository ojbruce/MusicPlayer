import React from 'react';

class TrackDetails extends React.Component {
  // Render
  render(){
    return(
      <div className="trackdetails">
        <img src={this.props.trackimg}/>
        <h4>{this.props.album}>{this.props.artist}</h4>
        <h3>{this.props.title}</h3>
      </div>
    )
  }

}
// Export
export default TrackDetails
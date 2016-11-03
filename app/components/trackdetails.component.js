import React from 'react';

class TrackDetails extends React.Component {
  // Render
    render(){
        return(
          <div className="trackdetails">
            <img src={this.props.trackimg} />
            <h3>{this.props.title}</h3>
          </div>
        )
    }

}
// Export
export default TrackDetails
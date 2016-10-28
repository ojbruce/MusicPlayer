{/* The main app
  * Created by Olivia Bruce  
  */}

import React from 'react';
import ReactDOM from 'react-dom';

// Import all sub components
import Search from './components/search.component';
import TrackDetails from './components/trackdetails.component';
import Player from './components/player.component';
import ProgressBar from './components/progressbar.component';

// The app class
class App extends React.Component {
    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div>
                <Search />
                <TrackDetails title={'Track title'} album={'The album'} artist={'The artist'} trackimg={'https://i.redd.it/50jeybcxvztx.jpg'}/>
                <ProgressBar position={'0.3'} elapsed="'00:00'" total={'0:40'}/>
                <Player />
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(
    <App/ >,
    document.getElementById('content')
);

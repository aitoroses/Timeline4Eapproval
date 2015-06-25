import Radium from 'radium';
import c from './color';
import {p} from './util';

import Sidebar from './Sidebar';
import MainView from './MainView';

import atom from '../lib/state';

var styles = {
  base: {
    background: c.LIGHT_GRAY,
    border: 0,
    color: 'white',
    height: '100%',
    width: p(100),
    // transition: 'background 0.3s ease',
    //
    // ':hover': {
    //   background: LIGHT_BLUE
    // }
  }
};

// Main App Handler
@Radium
class Timeline extends atom.Component {
  render() {
    var sections = this.state.sections;
    var streams = this.state.streams;
    return (
      <div style={styles.base}>
        <Sidebar />
        <MainView />
      </div>
    )
  }
}

export default Timeline;

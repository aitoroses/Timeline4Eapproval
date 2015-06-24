import Radium from 'radium';
import {LIGHT_BLUE, MEDIUM_BLUE, DARK_BLUE} from './Timeline';

const SIDEBAR_WIDTH = 20;

const OU_BAR_WIDTH = 30;
const STREAMS_WIDTH = 70;

function p(val) {
  return val + '%';
}

var styles = {
  base: {
    position: "absolute",
    top: 0,
    border: 0,
    color: 'white',
    height: '100%',
    width: p(SIDEBAR_WIDTH),
    transition: 'background 0.3s ease',

    ':hover': {
      background: DARK_BLUE
    }
  },

  left: {
    background: LIGHT_BLUE,
    width: p(OU_BAR_WIDTH)
  },

  right: {
    background: MEDIUM_BLUE,
    left: p(OU_BAR_WIDTH),
    width: p(STREAMS_WIDTH),

  }
};

// Main App Handler
@Radium
class Timeline extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <div key="left" style={[styles.base, styles.left]}>

        </div>
        <div key="right" style={[styles.base, styles.right]}>

        </div>
      </div>

    )
  }
}

export default Timeline;

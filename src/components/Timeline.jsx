import Radium from 'radium';

import Sidebar from './Sidebar';

export const WHITE = "#FFFFFF"
export const LIGHT_GRAY = "#F3F4F6";
export const LIGHT_BLUE = "#455161";
export const MEDIUM_BLUE = "#3D4959";
export const DARK_BLUE = "#2F3847";
export const BASE_GREEN = "#33DABE";


var styles = {
  base: {
    background: LIGHT_GRAY,
    border: 0,
    color: 'white',
    height: '100%',
    width: '100%',
    // transition: 'background 0.3s ease',
    //
    // ':hover': {
    //   background: LIGHT_BLUE
    // }
  }
};

// Main App Handler
@Radium
class Timeline extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <Sidebar />
      </div>
    )
  }
}

export default Timeline;

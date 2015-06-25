import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

var styles = {
  base: {
    background: c.LIGHT_GRAY,
    border: 0,
    height: '100%',
    color: "black",
    width: p(80),
    left: p(20),
    position: "absolute"
  }
};

@Radium
class MainView extends React.Component {
  render() {
    return (
      <div style={[styles.base]}>Main View</div>
    )
  }
}

export default MainView;

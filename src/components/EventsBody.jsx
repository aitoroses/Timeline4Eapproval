import Radium from 'radium';
import c from './color';
import {p, ph, p_rel, ph_rel, size} from './util';

import VerticalTimelineBar from './VerticalTimelineBar';
import EventsContainer from './EventsContainer';

var styles = {
  base: {
    padding: 20,
    overflowY: 'scroll'
  }
}

@Radium
class EventsBody extends React.Component {

  static propTypes = {
    height: React.PropTypes.any.isRequired
  }

  render() {

    var layoutStyle = {
      height: this.props.height,
      position: 'relative'
    }

    return (
      <div id="eventsbody" style={[layoutStyle, styles.base]}>
        <div style={{
          position: 'absolute',
          left: -10,
          display: 'inline-block'
          }}>
          <VerticalTimelineBar height={this.props.height} />
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          paddingTop: 20,
          paddingLeft: 20
          }}>
          <EventsContainer />
        </div>
      </div>
    )
  }
}

export default EventsBody;

import Radium from 'radium';
import c from './color';
import {p, ph, p_rel, ph_rel, size} from './util';

import VerticalTimelineBar from './VerticalTimelineBar';
import EventsContainer from './EventsContainer';
import OpacityHelper from './OpacityHelper';

import {store} from '../stores/TimelineStore'

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

  state = {
    timelineBarHeight: 0,
    points: []
  }

  updateTimeline(val) {
    this.setState({
      timelineBarHeight: val
    });
  }

  updatePoints(points) {
    this.setState({points})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.height == this.props.height &&
      nextState.timelineBarHeight == this.state.timelineBarHeight &&
      nextState.points == this.state.points
    ) ? true : false
  }

  render() {

    var events = store.getEvents();

    var layoutStyle = {
      height: this.props.height,
      position: 'relative'
    }

    return (
      <OpacityHelper changer={this.props.height}>
        <div id="eventsbody" style={[layoutStyle, styles.base]}>
          <div style={{
            position: 'absolute',
            left: -10,
            display: 'inline-block'
            }}>
            <VerticalTimelineBar height={this.state.timelineBarHeight} points={this.state.points} />
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            paddingTop: 20,
            paddingLeft: 20
            }}>
            <EventsContainer
              heightChanged={this.updateTimeline.bind(this)}
              pointsChanged={this.updatePoints.bind(this)}
              events={events} />
          </div>
        </div>
      </OpacityHelper>
    )
  }
}

export default EventsBody;

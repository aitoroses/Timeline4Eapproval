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

          {/* Timeline Bar */}
          <div style={{
            position: 'absolute',
            left: -10,
            display: 'inline-block'
            }}>
            <VerticalTimelineBar height={this.state.timelineBarHeight} points={this.state.points} />
          </div>

          {/* Events container */}
          <div style={{
            position: 'absolute',
            top: 0,
            paddingTop: 20,
            paddingLeft: 20,
            width: '60%'
            }}>
            <EventsContainer
              heightChanged={this.updateTimeline.bind(this)}
              pointsChanged={this.updatePoints.bind(this)}
              events={events} />
          </div>

          {/* My actions */}
          <div id="event-actions" style={{
            position: 'fixed',
            top: 150,
            right: '10%',
            float: "right",
            padding: 20,
            width: 200,
            backgroundColor: c.MEDIUM_BLUE,
            color: 'white'
            }}>
              <Radium.Style scopeSelector="#event-actions" rules={{
                  '.action-title': {
                    fontWeight: 200
                  },
                  '.action-list div': {
                    marginBottom: '5px',
                    fontWeight: 200,
                    cursor: 'pointer'
                  },
                  '.action-list div:hover': {
                    textDecoration: 'underline'
                  }
                }} />
              <h4 className="action-title">My Actions</h4>
              <div className="action-list">
                <div>Create Request</div>
                <div>Others</div>
                <div>Required</div>
                <div>Declined</div>
                <div>Waiting</div>
              </div>
          </div>
        </div>
      </OpacityHelper>
    )
  }
}

export default EventsBody;

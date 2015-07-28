import Radium from 'radium';
import c from './color';
import {p, ph, p_rel, ph_rel, size} from './util';

var styles = {
  base: {
    padding: 20
  }
}

class VerticalTimelineBar extends React.Component {

  static WIDTH = 50
  static VERTICAL_PADDING = 20

  static propTypes = {
    height: React.PropTypes.number.isRequired
  }

  getStyle() {
    return {
      base: {
        height: this.props.height,
        width: VerticalTimelineBar.WIDTH,
        left: 0,
        position: 'absolute'
      },
      line: {
        stroke: c.TIMELINE_GRAY,
        strokeWidth: '2px'
      },
      circle: {
        fill: c.TIMELINE_GRAY
      }
    }
  }

  getPoints() {
    return [50, 100, 200]
  }

  renderCircle(y, radius = 10) {
    var style = this.getStyle();
    var w = VerticalTimelineBar.WIDTH;
    return (
      [
        <circle
          key="shadow"
          style={{
            fill: c.LIGHT_GRAY
          }}
          cx={w/2}
          cy={y + 10}
          r={radius + 5}>
        </circle>,
        <circle
          key="main"
          style={style.circle}
          cx={w/2}
          cy={y + 10}
          r={radius}>
        </circle>
      ]
    )
  }

  render() {
    var w = VerticalTimelineBar.WIDTH;
    var style = this.getStyle();
    return (
      <svg style={style.base}>
        {/* Main vertical line */}
        <line
          x1={w/2}
          x2={w/2}
          y1={0 + VerticalTimelineBar.VERTICAL_PADDING}
          y2={this.props.height - VerticalTimelineBar.VERTICAL_PADDING}
          style={style.line}>
        </line>
        {this.getPoints().map(p => this.renderCircle(p, 5))}
        {this.renderCircle(0)}
      </svg>
    )
  }
}

@Radium
class EventsBody extends React.Component {

  static propTypes = {
    height: React.PropTypes.any.isRequired
  }

  render() {

    var layoutStyle = {
      height: this.props.height
    }

    return (
      <div id="eventsbody" style={[layoutStyle, styles.base]}>
        <VerticalTimelineBar height={this.props.height} />
        Hello
      </div>
    )
  }
}

export default EventsBody;

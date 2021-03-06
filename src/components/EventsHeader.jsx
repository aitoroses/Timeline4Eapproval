import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import {actions} from '../actions/TimelineActions';
import {store} from '../stores/TimelineStore';

var PropTypes = React.PropTypes

const EVENTS_HEADER_HEIGHT = 100;

var styles = {
  title: {
    display: 'inline-block',
    width: 100,
    fontSize: 24,
    color: '#707882',
    fontWeight: 100,
    lineHeight: 24 + 'px',
    verticalAlign: 'bottom',
  },
  switch: {
    display: 'inline-block',
    margin: 0,
    fontSize: 10,
    padding: '2px 8px',
    borderRadius: 5,
    lineHeight: 20 + 'px',
    cursor: 'pointer'
  }
}

@Radium
class SwitchGroup extends React.Component {

  static propTypes = {
    active: PropTypes.number.isRequired,
    onActiveChange: PropTypes.func.isRequired
  }

  renderChildren() {
    var self = this;
    return React.Children.map(this.props.children, (c, i) => {
      return (
        <span className="wrapped-child" onClick={self.props.onActiveChange.bind(c, i)}>
          <Switch label={c.props.label} active={self.props.active == i} />
        </span>
      )
    })
  }

  render() {
    return (
      <span className="switch-group" >
        {this.renderChildren()}
      </span>
    )
  }
}

@Radium
class Switch extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    active: PropTypes.bool
  }

  render() {
    return (
      <div className="switch" style={[styles.switch, {
          color: this.props.active ? '#FFF' : c.DARK_GRAY,
          background: this.props.active ? c.MEDIUM_BLUE : 'none',
        }]}>
        {this.props.label}
      </div>
    )
  }
}

@Radium
class Slider extends React.Component {

  constructor() {
    super()
    this.handleDrag = this.handleDrag.bind(this)
  }

  static propTypes = {
    max: PropTypes.number.isRequired
  }

  style = {
    base: {
      width: 150,
      height: 100,
      position: 'relative',
      display: 'inline-block'
    },
    line1: {
      stroke: c.SLIDER_BLUE,
      strokeWidth: 2
    },
    line2: {
      stroke: c.MEDIUM_GRAY,
      strokeWidth: 2
    },
    circle: {
      r: 5,
      cursor: 'pointer',
      fill: c.SLIDER_BLUE,
      transition: 'r .3s ease'
    },
    draggable: {
      height: 60,
      width: 60,
      position: 'absolute',
    }
  }

  state = {
    position: 50,
    dragging: false
  }

  handleDrag(e) {
    var handler = $(React.findDOMNode(this.refs.handler));
    var offsetX = e.clientX - handler.offset().left;
    var sliderAmount = offsetX / this.style.base.width * 100;
    var newPos = this.state.position + sliderAmount - 20;
    if (newPos > 0 && newPos <=100) {
      this.setState({
        position: newPos
      })
    }
    actions.setSliderPosition(newPos)
  }

  handleDragEnter() {
    this.setState({
      dragging: true
    })
    $(document).mousemove(this.handleDrag)
  }

  handleDragEnd() {
    this.setState({
      dragging: false
    })

    $(document).off('mousemove', this.handleDrag)

    // Finally set the position on the Atom
    actions.setSliderPosition(this.state.position)
  }

  render() {
    var hovered = this.state.dragging

    var s = this.style;
    var middle = this.style.base.height / 2;
    var sliderPos = this.state.position;

    var sliderPx = sliderPos/100 * s.base.width;

    var xpos = x => x + 10

    var line1 = {
      x1: xpos(0), y1: middle,
      x2: xpos(sliderPx), y2: middle
    }

    var line2 = {
      x1: xpos(sliderPx), y1: middle,
      x2: xpos(s.base.width), y2: middle
    }

    return (
      <div className="slider" style={[this.style.base]}>
        {/* Movement handle */}
        <div ref="handler"
          key="handle"
          onMouseDown={this.handleDragEnter.bind(this)}
          onMouseUp={this.handleDragEnd.bind(this)}
          style={[s.draggable, {
            left: xpos(sliderPx) - s.draggable.width / 2,
            top: middle - s.draggable.height / 2
          }]}/>
        {/* SVG Slider */}
        <svg width={xpos(xpos(s.base.width))} height={s.base.height}>
          <line
            {...line1}
            style={s.line1} />
          <line
            {...line2}
            style={s.line2} />

          <circle
            cx={xpos(sliderPx)}
            cy={25}
            style={[s.circle, {r: 10}]}/>
          <text x={xpos(sliderPx)} y={30} fill="white" textAnchor="middle" fontSize="10px">{store.getActualFilterValue()}</text>

          <circle
            cx={xpos(sliderPx)}
            cy={middle}
            style={[s.circle, {r: hovered ? 10 : 5}]} />
        </svg>
      </div>
    )
  }
}

@Radium
class EventsHeader extends React.Component {

  static propTypes = {
    height: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div id="eventsheader" style={[styles.base, {height: this.props.height}]}>
        <div style={{
            display: 'inline-block',
            verticalAlign: 'top',
            position: 'relative',
            top: 20
          }}>
          <div style={[styles.title]}>Timeline</div>
          <SwitchGroup
            onActiveChange={actions.setTimelineFilter}
            active={store.getActiveFilter()}>
            <Switch label="DAYS" />
            <Switch label="MONTHS" />
            <Switch label="YEARS" />
          </SwitchGroup>
        </div>
        <div style={{
            marginLeft: 30,
            display:'inline-block',
            position: 'relative',
            bottom: 15
          }}>
          <Slider max={30} />
        </div>
      </div>
    )
  }
}

export default EventsHeader;

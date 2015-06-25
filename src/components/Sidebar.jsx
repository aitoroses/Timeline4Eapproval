import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import Streams from './Streams';

import {store} from '../stores/SectionStore';
import {actions} from '../actions/SectionActions';

// REMS
const SIDEBAR_WIDTH = 20;

// Percentages
const OU_BAR_WIDTH = 20;
const STREAMS_WIDTH = 100 - OU_BAR_WIDTH;

var styles = {
  base: {
    position: "absolute",
    top: 0,
    border: 0,
    color: 'white',
    height: '100%',
    width: p(SIDEBAR_WIDTH),
    transition: 'background 0.3s ease',
    'userSelect': 'none'
  },

  left: {
    background: c.LIGHT_BLUE,
    width: p_rel(OU_BAR_WIDTH, SIDEBAR_WIDTH)
  },

  right: {
    background: c.MEDIUM_BLUE,
    left: p_rel(OU_BAR_WIDTH, SIDEBAR_WIDTH),
    width: p_rel(STREAMS_WIDTH, SIDEBAR_WIDTH),
    boxShadow: 'inset 5px 0px 10px -9px black',
    ':hover': {
      background: c.DARK_BLUE
    }
  },

  button: {
    width: p_rel(OU_BAR_WIDTH, SIDEBAR_WIDTH),
    height: p_rel(OU_BAR_WIDTH, SIDEBAR_WIDTH),
    lineHeight: p_rel(OU_BAR_WIDTH, SIDEBAR_WIDTH),
    textAlign: 'center',
    transition: 'background 0.3s ease',

    ':hover': {
      background: c.LIGHTER_BLUE
    }
  },

  'active': {
    background: c.BASE_GREEN,
    ':hover': {
      background: c.LIGHT_GREEN
    }
  }
};

// Main App Handler
@Radium
class Sidebar extends React.Component {

  renderButtons() {
    var self = this;
    var btns = store.getButtons().map((btn) => {
      return <Button key={btn.id}
        label={btn.label}
        active={store.isSectionActive(btn)}
        onClick={actions.setActive.bind(null, btn.id)} />
    })
    return (
      <div>
        {btns}
        {this.renderButtonOverlay()}
      </div>
    )
  }

  renderButtonOverlay() {
    var active = store.getActive();
    return <ButtonOverlay position={active.id} label={active.label}/>
  }

  render() {
    return (
      <div key="sidebar" id="sidebar" style={styles.base}>
        <div key="left" style={[styles.base, styles.left]}>
          {this.renderButtons()}
        </div>
        <div key="right" style={[styles.base, styles.right]}>
          <Streams streams={this.props.streams}/>
        </div>
      </div>
    )
  }
}

@Radium
class Button extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
  }

  render() {
    var hovered = Radium.getState(this.state, 'button', ':hover')
    var color = hovered ? c.LIGHT_GREEN : c.BASE_GREEN

    return (
      <div  style={{position: 'relative'}} onClick={this.props.onClick}>
        <div key="button" style={[
          styles.left,
          styles.button
        ]}>
        {this.props.label}
        </div>
      </div>
    )
  }
}

@Radium
class ButtonOverlay extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    position: React.PropTypes.number.isRequired
  }

  constructor(props) {
    super()
    this.state = {
      opacity: 1,
      label: props.label
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.label !== props.label) {
      this.setState({
        opacity: 0,
      });
      setTimeout(() => {
        this.setState({
          opacity: 1,
          label: props.label
        });
      }, 300)
    }
  }

  render() {
    var hovered = Radium.getState(this.state, 'button', ':hover')
    var color = hovered ? c.LIGHT_GREEN : c.BASE_GREEN
    var top = styles.button.height.split('px')[0] * (this.props.position - 1);

    return (
      <div  style={{
          position: 'absolute',
          top: top,
          transition: 'top 0.3s ease-in-out'
        }}>
        <div key="button" style={[
          styles.left,
          styles.button,
          styles.active
        ]}>
        <div style={{
            transition: 'opacity 0.3s ease',
            opacity: this.state.opacity
          }}>{this.state.label}</div>
        </div>
        <Triangle color={color}/>
      </div>
    )
  }
}

class Triangle extends React.Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired
  }

  size = 10

  points = [
    [0, 0],
    [this.size/2, this.size/2],
    [0, this.size]
  ]

  calculatePoints() {
    return this.points.map( p => p.join(',') ).join(' ')
  }

  render() {
    return (
      <svg height={this.size} width={this.size} style={{
          position: 'absolute',
          top: Math.floor(styles.button.height.split('px')[0]/2) - this.size/2,
          right: -this.size,
          zIndex: 10,
        }}>
        <polygon points={this.calculatePoints()} style={{
            transition: 'fill 0.3s ease',
            fill: this.props.color
        }} />
      </svg>
    )
  }
}


export default Sidebar;

import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import {actions} from '../actions/TimelineActions';
import {store} from '../stores/TimelineStore';

var PropTypes = React.PropTypes

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
class EventsHeader extends React.Component {

  render() {
    return (
      <div id="eventsheader" style={[styles.base]}>

        <div style={[styles.title]}>Timeline</div>

        <SwitchGroup
          onActiveChange={actions.setTimelineFilter}
          active={store.getActiveFilter()}
        >
          <Switch label="DAYS" />
          <Switch label="MONTHS" />
          <Switch label="YEARS" />
        </SwitchGroup>

        {/*<Slider max={30} /> */}

      </div>
    )
  }
}

export default EventsHeader;

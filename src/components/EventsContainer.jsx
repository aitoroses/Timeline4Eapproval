import Radium from 'radium';
import c from './color';

var styles = {
  base: {
    marginRight: 20,
  }
}

@Radium
class EventsContainer extends React.Component {
  render() {

    var events = [
      {
        title: "Max Mustermann approved as medical your event...",
        subject: "Michel",
        date: "2 hours ago",
        kind: "Event",
        description: `Congress in London from 26th JUNE 2015 <br>
          We do this event in London because it's very important and invited many <br>
          HCP of others VIP from the medical sector ...`,
        actions: ["Preview", "More", "Share"]
      },
      {
        title: "Max Mustermann approved as medical your event...",
        subject: "Michel",
        date: "2 hours ago",
        kind: "Event",
        description: `Congress in London from 26th JUNE 2015 <br>
          We do this event in London because it's very important and invited many <br>
          HCP of others VIP from the medical sector ...`,
        actions: ["Preview", "More", "Share"]
      }
    ]

    return (
      <div id="events-container" style={[styles.base]}>
        {events.map((e, i) => {
          var {actions, ...data} = e;
          return <Event key={i} actions={actions} data={data}></Event>
        })}
      </div>
    )
  }
}

@Radium
class Event extends React.Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired,
    actions: React.PropTypes.array.isRequired
  }

  getActionType(action) {
    return function() {
      alert("You're doing " + action);
    }
  }

  render() {
    var actionStyle={
      display: 'inline-block',
      margin: "15px 60px 15px 5px",
      color: c.DARK_BLUE,
      transition: 'color .3s',
      ':hover': {
        color: c.MEDIUM_GRAY
      }
    }
    return (
      <div style={{
          marginBottom: 10
        }}>
        <EventContents {...this.props.data} />
        <div style={{
            backgroundColor: "white",
            paddingLeft: '80px',
            paddingRight: '20px',
          }}>
          <div style={{
              backgroundColor: "white",
              borderTop: '1px solid black',
            }} />
          {this.props.actions.map((a, i) => {
            return (
              <div style={actionStyle} key={i} onClick={this.getActionType(a)}>{a}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

@Radium
class EventContents extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subject: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    kind: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  }

  static style = {
    base: {
      background: 'white',
      padding: '10px',
      paddingLeft: '80px'
    },
    title: {
    	fontSize: '18px',
      fontWeight: 300,
      color: c.DARK_BLUE
    },
    subtitle: {
      marginTop: 0,
    	color: 'gray',
      fontWeight: 200,
    },
    time: {
      fontWeight: 200,
    	marginLeft: 20
    },
    event: {
      marginTop: 20,
      color: c.MEDIUM_BLUE,
      fontWeight: 300
    },
    eventKind: {
      fontWeight: 700
    }
  }

  render() {
    var {base, title, subtitle, time, event, eventKind} = EventContents.style;
    return (
      <div style={[base]}>
      	<div style={[title]}>{this.props.title}</div>
        <div style={[subtitle]}>
        	{this.props.subject.toUpperCase()}
          <span style={[time]}>{this.props.date}</span>
        </div>
        <div style={event}>
          <span style={eventKind}>{this.props.kind}:{' '}</span>
          <span dangerouslySetInnerHTML={{__html: this.props.description}} />
        </div>
      </div>
    )
  }
}

export default EventsContainer;

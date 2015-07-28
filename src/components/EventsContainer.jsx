import Radium from 'radium';
import c from './color';

var styles = {
  base: {
    marginRight: 20
  }
}

@Radium
class EventsContainer extends React.Component {
  render() {
    return (
      <div id="events-container" style={[styles.base]}>
        Hello
      </div>
    )
  }
}

export default EventsContainer;

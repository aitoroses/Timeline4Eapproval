import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import EventsHeader from './EventsHeader';

var styles = {
  base: {
    height: '100%',
    padding: 20
  }
}

@Radium
class EventsView extends React.Component {
  render() {
    return (
      <div id="eventsview" style={[styles.base]}>
        <EventsHeader />
      </div>
    )
  }
}

export default EventsView;

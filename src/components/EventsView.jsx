import Radium from 'radium';
import c from './color';
import {p, ph, p_rel, ph_rel, size} from './util';

import EventsHeader from './EventsHeader';
import EventsBody from './EventsBody';

import {HEADER_HEIGHT} from './SearchBar';

const EVENTS_HEADER_HEIGHT = 70;

/* The total height of the
 * main view it's the entire viewport less
 * the SearchBar
 */
var styles = {
  base: {
    height: size.height - HEADER_HEIGHT,
    padding: 20
  }
}

/**
 * EventsView acts as the layout for the events view
 */
@Radium
class EventsView extends React.Component {
  render() {
    var contentHeight = styles.base.height - 20 * 2;
    return (
      <div id="eventsview" style={[styles.base]}>
        <EventsHeader height={EVENTS_HEADER_HEIGHT}/>
        <EventsBody height={contentHeight - EVENTS_HEADER_HEIGHT}/>
        {/*<EventsActions />*/}
      </div>
    )
  }
}

export default EventsView;

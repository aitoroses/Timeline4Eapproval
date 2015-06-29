import Radium from 'radium';
import c from './color';
import {p, p_rel, size} from './util';

import EventsHeader from './EventsHeader';

import {HEADER_HEIGHT} from './SearchBar';

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

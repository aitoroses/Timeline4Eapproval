import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import SearchBar from './SearchBar';
import EventsView from './EventsView';

var styles = {
  base: {
    background: c.LIGHT_GRAY,
    height: '100%',
    color: "black",
    width: p(80),
    left: p(20),
    position: "absolute"
  }
};

@Radium
class MainView extends React.Component {
  render() {
    return (
      <div id="mainview" style={[styles.base]}>
        <SearchBar />
        <EventsView />
      </div>
    )
  }
}

export default MainView;

import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import {store as SectionStore} from '../stores/SectionStore';
import {store} from '../stores/StreamStore';
import {actions} from '../actions/StreamActions';

import OpacityHelper from './OpacityHelper';

@Radium
class Streams extends React.Component {

  style = {
    base: {
      padding: 20,
    },
    title: {
      marginBottom: 12
    },
    streams: {
      marginBottom: 5,
      fontSize: 12,
      color: "#7B8492",
      transition: "color .2s ease",
      cursor: "pointer",
      ':hover': {
        color: "#959EAD",
      }
    },
    streamActive: {
      marginBottom: 5,
      fontSize: 12,
      color: "#FFFFFF",
      ':hover': {
        color: "#FFFFFF",
      }
    }
  }

  renderStream(stream, index) {
    var streams = store.getStreams();
    var isActive = store.isActive(index);
    return (
      <div
        key={index}
        style={[this.style.streams, isActive && this.style.streamActive]}
        onClick={actions.setActive.bind(null, index)}
        className="stream-item">
        {'# ' + stream.label}
      </div>
    )
  }

  render() {
    var style = this.style;
    var coll = store.getStreams();
    return (
      <div style={[style.base, {opacity: this.state.opacity}]}>
        <div className="streams-title" style={style.title}>STREAMS</div>
        <div className="stream-group">
          <OpacityHelper changer={SectionStore.getActive()} duration={0.5}>
            {coll.map(this.renderStream.bind(this))}
          </OpacityHelper>
        </div>
      </div>
    )
  }
}

export default Streams;

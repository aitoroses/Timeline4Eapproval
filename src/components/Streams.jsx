import Radium from 'radium';
import c from './color';
import {p, p_rel} from './util';

import {store as SectionStore} from '../stores/SectionStore';
import {store} from '../stores/StreamStore';
import {actions} from '../actions/StreamActions';

import OpacityHelper from './OpacityHelper';
import CustomizableSearchBar from './CustomizableSearchBar';

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
    },
    divider: {
      background: c.DARK_BLUE,
      margin: '20px auto',
      height: 2,
      width: 120
    },
    addMore: {
      background: c.DARK_BLUE,
      margin: 'auto',
      height: 20,
      width: 135,
      color: 'white',
      position: "relative",
      top: 40,
      left: -3,
      fontSize: 12,
      lineHeight: 20 + 'px',
      textAlign: 'center',
      borderRadius: 2,
      transition: 'background .3s ease',
      ':hover': {
        background: c.LIGHT_BLUE,
      }
    },
    addMoreIcon: {
      position: "absolute",
      lineHeight: 20 + 'px',
      left: 10
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

        <div style={[style.divider]}></div>

        <CustomizableSearchBar
          id="streams-search"
          icon="search"
          placeholder="Search"
          height={20}
          width={120}
          background={c.DARK_BLUE}
          color="white"
          onChange={(e) => {
            actions.setFilter(e.target.value);
          }}
          />

        <div className="add-more" style={[style.addMore]}>
          <i className="fa fa-plus-circle" style={[style.addMoreIcon]}></i>
          {'Add more'}
        </div>

      </div>
    )
  }
}

export default Streams;

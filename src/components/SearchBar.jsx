import Radium from 'radium';
import c from './color';

const HEADER_HEIGHT = 50;
const LOGO_HEIGHT = 20;
const SEARCH_WIDTH = 300;
const SEARCH_HEIGHT = HEADER_HEIGHT / 2;
const SEARCH_PADDING = 10;
const FONT_HEIGHT = 13;

var headerStyle = {
  header: {
    position: 'relative',
    background: "white",
    height: HEADER_HEIGHT,
    width: '100%'
  },
  logo: {
    height: LOGO_HEIGHT,
    position: 'absolute',
    left: SEARCH_WIDTH + 200,
    top: (HEADER_HEIGHT - (LOGO_HEIGHT + 5)) / 2
  },
  search: {
    left: 30,
    width: SEARCH_WIDTH,
    height: SEARCH_HEIGHT,
    position: 'absolute',
    background: c.LIGHT_GRAY,
    top: (HEADER_HEIGHT - SEARCH_HEIGHT) / 2,
    lineHeight: SEARCH_HEIGHT + 'px',
    //padding: `0 ${SEARCH_PADDING}px`,
    zIndex: 1
  },
  searchBorder: {
    position: 'absolute',
    background: c.LIGHT_GRAY,
    width: SEARCH_HEIGHT,
    height: SEARCH_HEIGHT,
    borderRadius: '50%',
    zIndex: 0
  },
  input: {
    position: 'relative',
    height: SEARCH_HEIGHT,
    width: SEARCH_WIDTH - SEARCH_HEIGHT,
    background: c.LIGHT_GRAY,
    border: 0,
    zIndex: 1,
    outline: 'none',
    left: SEARCH_HEIGHT
  },
  icon: {
    position: 'absolute',
    height: FONT_HEIGHT,
    top: FONT_HEIGHT / 2
  }
}

@Radium
class SearchBar extends React.Component {
  render() {
    return (
      <div style={[headerStyle.header]}>
        <img id="logo"
          style={[headerStyle.logo]}
          src={require("url?mimetype=image/gif!../../assets/images/novartis.gif")} />

        <div id="search-container" style={[headerStyle.search]}>
          <div style={[headerStyle.searchBorder, {left: -SEARCH_PADDING}]}></div>
          <div style={[headerStyle.searchBorder, {right: -SEARCH_PADDING}]}></div>
          <i className="fa fa-search" style={[headerStyle.icon]}></i>
          <input placeholder="Search" type="text" style={[headerStyle.input]} />
        </div>
      </div>
    )
  }
}

export default SearchBar

import Radium from 'radium';
import c from './color';

import CustomizableSearchBar from './CustomizableSearchBar';

// CONSTANTS
const HEADER_HEIGHT = 50;
const LOGO_HEIGHT = 20;
const SEARCH_WIDTH = 300;
const SEARCH_HEIGHT = HEADER_HEIGHT / 2;

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
  }
}

@Radium
class SearchHeader extends React.Component {
  render() {
    return (
      <div style={[headerStyle.header]}>
        <img id="logo"
          style={[headerStyle.logo]}
          src={require("url?mimetype=image/gif!../../assets/images/novartis.gif")} />

        <CustomizableSearchBar
          id="search-container"
          icon="search"
          placeholder="Search"
          parentHeight={HEADER_HEIGHT}
          height={SEARCH_HEIGHT}
          width={SEARCH_WIDTH}
          background={c.LIGHT_GRAY}
          color="black"
          />
      </div>
    )
  }
}

export default SearchHeader

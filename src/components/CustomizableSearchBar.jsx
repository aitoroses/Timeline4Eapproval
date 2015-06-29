import Radium from 'radium';

const BAR_PADDING = 10;

@Radium
class CustomizableSearchBar extends React.Component {

  static propTypes = {
    icon: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    height: React.PropTypes.number,
    parentHeight: React.PropTypes.number,
    width: React.PropTypes.number,
    background: React.PropTypes.string,
    color: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  getStyle() {

    var WIDTH = this.props.width;
    var HEIGHT = this.props.height;
    var BACKGROUND = this.props.background;
    var COLOR = this.props.color;

    return {
      search: {
        left: 30,
        width: WIDTH,
        height: HEIGHT,
        position: 'absolute',
        background: BACKGROUND,
        top: this.props.parentHeight ? (this.props.parentHeight - HEIGHT) / 2 : null,
        lineHeight: HEIGHT + 'px',
        zIndex: 1
      },
      searchBorder: {
        position: 'absolute',
        background: BACKGROUND,
        width: HEIGHT,
        height: HEIGHT,
        borderRadius: '50%',
        zIndex: 0
      },
      input: {
        position: 'relative',
        height: HEIGHT,
        width: WIDTH - HEIGHT,
        background: BACKGROUND,
        border: 0,
        zIndex: 1,
        outline: 'none',
        left: HEIGHT,
        fontSize: HEIGHT / 1.8,
        padding: 0,
        display: 'inherit',
        color: COLOR
      },
      icon: {
        position: 'absolute',
        height: HEIGHT,
        lineHeight: HEIGHT + 'px',
        fontSize: HEIGHT / 2,
        color: COLOR
      }
    }
  }

  render() {
    var style = this.getStyle();
    var placeholder = style.input.color == "white" ? "white" : null

    return (
      <div id={this.props.id} style={[style.search]}>
        { /* This is needed for styling the placeholder */ }
        <Radium.Style
          scopeSelector={'#' + this.props.id}
          rules={{
            '::-webkit-input-placeholder': {
              color: placeholder
            },
            ':-ms-input-placeholder': {
              color: placeholder
            },
            '::-moz-input-placeholder': {
              color: placeholder
            },
            ':-moz-input-placeholder': {
              color: placeholder
            }
          }}
        />
      <div style={[style.searchBorder, {left: -BAR_PADDING}]}></div>
        <div style={[style.searchBorder, {right: -BAR_PADDING}]}></div>
        <i className={"fa " + "fa-" + this.props.icon} style={[style.icon]}></i>
        <input onChange={this.props.onChange} placeholder={this.props.placeholder} type="text" style={[style.input]} />
      </div>
    )
  }
}

export default CustomizableSearchBar;

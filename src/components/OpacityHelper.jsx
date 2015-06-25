class OpacityHelper extends React.Component {
  static propTypes = {
    changer: React.PropTypes.any.isRequired,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    duration: React.PropTypes.number
  }

  constructor(props) {
    super();
    this.state = {
      opacity: props.min || 0
    }
  }

  componentDidMount() {
    this.setState({
      children: this.props.children
    })
    setTimeout(() => {
      this.setState({
        opacity: this.props.max || 1
      })
    });
  }

  componentWillReceiveProps({changer, children}) {

    var time = this.props.duration || 0.2;
    if (this.props.changer !== changer) {
      this.setState({
        opacity: this.props.min || 0
      })
      setTimeout(() => {
        this.setState({
          children: children,
          opacity: this.props.max || 1
        });
      }, time * 1000);
    } else if (this.state.children !== children) {
      this.setState({
        children: children
      });
    }
  }

  render() {
    return (
      <div style={{
          transition: `opacity ${ this.props.duration || 0.2}s ease`,
          opacity: this.state.opacity
        }}>
        {this.state.children}
      </div>
    )
  }
}

export default OpacityHelper;

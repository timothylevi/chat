Room = React.createClass({
  render() {
    return (
      <li className="room-item">
        <a className="room-item-link" href={this.props.url}
          title={this.props.name}>
         {this.props.name}
        </a>
      </li>
    );
  }
});

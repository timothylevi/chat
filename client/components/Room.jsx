Room = React.createClass({
  render() {
    return (
      <li className="room-item">
        <a className="room-item-link" href={this.props.url}
          title={this.props.otherUser}>
         {this.props.otherUser}
        </a>
      </li>
    );
  }
});

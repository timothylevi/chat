Room = React.createClass({
  render() {
    const room = Session.get('room');
    const activeClassName = room === this.props.name ? "active-room" : '';

    return (
      <li className="room-item">
        <a className={`room-item-link ${activeClassName}`} href={`/rooms/${this.props.name}`}
          title={this.props.name}>
         {this.props.name}
        </a>
      </li>
    );
  }
});

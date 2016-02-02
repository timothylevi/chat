Room = React.createClass({
  setRoom(event) {
    event.preventDefault();

    Session.set('room', this.props.name);
  },

  render() {
    const activeClassName = Session.get('room') === this.props.name ? "active-room" : '';
    return (
      <li className="room-item">
        <a className={`room-item-link ${activeClassName}`} onClick={this.setRoom}
          title={this.props.name}>
         {this.props.name}
        </a>
      </li>
    );
  }
});

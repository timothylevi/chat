Room = React.createClass({
  render() {
    const room = Session.get('room');
    const href = this.props.scope === 'global' ? "/" : `/messages/${this.props._id}`;

    return (
      <li className="room-item">
        <a className={`room-item-link`} href={href}
          title={this.props.username}>
         {this.props.username}
        </a>
      </li>
    );
  }
});

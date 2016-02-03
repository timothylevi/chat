Room = React.createClass({
  render() {
    const room = Session.get('room');
    const userPath = `/messages/${this.props.username}`;
    const path = this.props.scope === 'global' ? "/" : userPath;

    const isActiveDirect = FlowRouter.current().path === userPath;
    const isActiveGlobal = this.props.scope === 'global' && FlowRouter.current().path === '/';
    const isActive = isActiveDirect || isActiveGlobal;
    const activeClass = isActive ? 'active-room' : '';

    return (
      <li className="room-item">
        <a className={`room-item-link ${activeClass}`} href={path}
          title={this.props.username}>
         {this.props.username}
        </a>
      </li>
    );
  }
});

GlobalMessage = React.createClass({
  propTypes: {
    // TODO: create a function for friendly 'x time ago' message
    message: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      edited: React.PropTypes.bool.isRequired,
      createdAt: React.PropTypes.instanceOf(Date),
      user: React.PropTypes.shape({
        name: React.PropTypes.string
      })
    })
  },
  render() {
    const user = this.props.message.user;
    const message = this.props.message;
    const secondsAgo = (new Date - message.createdAt) / 1000;

    return (
      <li>{user.name} ({secondsAgo} seconds ago{ message.edited ? ' edited' : ''}): {message.text}</li>
    );
  }
});

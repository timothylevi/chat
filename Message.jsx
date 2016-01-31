// Task component - represents a single todo item
GlobalMessage = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
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

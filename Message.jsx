GlobalMessage = React.createClass({
  propTypes: {
    // TODO: create a function for friendly 'x time ago' message
    message: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      edited: React.PropTypes.bool.isRequired,
      createdAt: React.PropTypes.instanceOf(Date).isRequired,
      updatedAt: React.PropTypes.instanceOf(Date),
      user: React.PropTypes.shape({
        name: React.PropTypes.string
      })
    })
  },

  getInitialState() {
    // TODO: Consider seconds ago counts as part of state
    return { messageInput: this.props.message.text };
  },

  showEditDialog(event) {
    event.preventDefault();
    // TODO: CSS Show/Hide trickery
  },

  updateInput(event) {
    event.preventDefault();

    this.setState({ messageInput: event.target.value });
  },

  updateMessage(event) {
    event.preventDefault();

    const messageText = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();

    Messages.update(this.props.message._id, {
      $set: {
        edited: true,
        updatedAt: new Date(),
        text: messageText
      }
    });
  },

  render() {
    const user = this.props.message.user;
    const message = this.props.message;
    const secondsAgo = (new Date - message.createdAt) / 1000;
    const editedSecondsAgo = (new Date - message.updatedAt) / 1000;

    return (
      <li>
        <h3>{user.name}</h3>
        <date>{secondsAgo} seconds ago</date>
        <aside>{message.edited ? 'Last Edited ' + editedSecondsAgo + ' seconds ago' : ''}</aside>
        <p>{message.text}</p>
        <button onClick={this.showEditDialog}>Edit</button>
        <form onSubmit={this.updateMessage}>
          <input type="text" ref="messageInput" value={this.state.messageInput} onChange={this.updateInput} />
        </form>
      </li>
    );
  }
});

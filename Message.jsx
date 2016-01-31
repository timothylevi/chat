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
    return {
      messageInput: this.props.message.text,
      secondsAgo: (new Date - this.props.message.createdAt) / 1000,
      editedSecondsAgo: this.props.message.updatedAt ? (new Date - this.props.message.updatedAt) / 1000 : 0
    };
  },

  showEditDialog(event) {
    //TODO: Move cursor to the end of the message?
    event.preventDefault();

    document.getElementById(this.props.message._id).classList.toggle("showEditDialog");
    ReactDOM.findDOMNode(this.refs.messageInput).focus();

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

    document.getElementById(this.props.message._id).classList.toggle("showEditDialog");
    this.setState({
      editedSecondsAgo: (new Date - this.props.message.updatedAt) / 1000
    });
  },

  render() {
    const user = this.props.message.user;
    const message = this.props.message;

    return (
      <li id={message._id} className="message-cpt">
        <h3>{user.name}</h3>
        <date>{this.state.secondsAgo} seconds ago</date>
        <aside>{message.edited ? 'Last Edited ' + this.state.editedSecondsAgo + ' seconds ago' : ''}</aside>
        <p>{message.text}</p>
        <button onClick={this.showEditDialog}>Edit</button>
        <form onSubmit={this.updateMessage}>
          <input type="text" ref="messageInput" value={this.state.messageInput} onChange={this.updateInput} />
        </form>
      </li>
    );
  }
});

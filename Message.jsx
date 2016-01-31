GlobalMessage = React.createClass({
  propTypes: {
    // TODO: create a function for friendly 'x time ago' message
    // and consider times that don't update when the component re-renders
    // that may be passing down a time from the parent.
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
      secondsAgo: Math.floor((new Date - this.props.message.createdAt) / 1000)
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

    Meteor.call("updateMessage", this.props.message._id, messageText);

    document.getElementById(this.props.message._id).classList.toggle("showEditDialog");
  },

  deleteMessage(event) {
    Meteor.call("deleteMessage", this.props.message._id);
  },

  render() {
    const user = this.props.message.user;
    const message = this.props.message;

    return (
      <li id={message._id} className="message-cpt">
        <h3>{user.name}</h3>
        <date>{this.state.secondsAgo} seconds ago</date>
        <aside>{message.edited ? 'Edited' : ''}</aside>
        <p>{message.text}</p>
        <button onClick={this.showEditDialog}>Edit</button>
        <button onClick={this.deleteMessage}>Delete</button>
        <form onSubmit={this.updateMessage}>
          <input type="text" ref="messageInput" value={this.state.messageInput} onChange={this.updateInput} />
        </form>
      </li>
    );
  }
});

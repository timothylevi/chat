App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
  },

  renderGlobalMessages() {
    return this.data.messages.map((message) => {
      return <GlobalMessage key={message._id} user={message.user} text={message.text}/>;
    });
  },

  sendMessage(event) {
    event.preventDefault();

    var messageText = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();

    Messages.insert({
      text: messageText,
      createdAt: new Date(),
      user: {
        name: "Tim Campbell"
      }
    });

    ReactDOM.findDOMNode(this.refs.messageInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Hive Chat</h1>
        </header>

        <ul>
          {this.renderGlobalMessages()}
        </ul>

        <form onSubmit={this.sendMessage}>
          <input type="text" ref="messageInput" placeholder="Type your message" />
        </form>
      </div>
    );
  }
});

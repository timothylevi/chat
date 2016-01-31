App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
  },

  renderGlobalMessages() {
    return this.data.messages.map((message) => {
      return <GlobalMessage key={message._id} message={message} />;
    });
  },

  createMessage(event) {
    event.preventDefault();

    let messageNode = ReactDOM.findDOMNode(this.refs.messageInput);
    const messageText = messageNode.value.trim();

    Messages.insert({
      text: messageText,
      edited: false,
      createdAt: new Date(),
      user: {
        name: "Tim Campbell"
      },
    });

    messageNode.value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Hive Chat</h1>
          <AccountsUIWrapper />
        </header>

        <ul>
          {this.renderGlobalMessages()}
        </ul>

        <form onSubmit={this.createMessage}>
          <input type="text" ref="messageInput" placeholder="Type your message" />
        </form>
      </div>
    );
  }
});

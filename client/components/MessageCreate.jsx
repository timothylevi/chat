MessageCreate = React.createClass({
  handleCreateMessage(event) {
    event.preventDefault();

    const createMessageInputNode = ReactDOM.findDOMNode(this.refs.createMessageInput);

    Messages.insert({
      text: createMessageInputNode.value.trim(),
      createdAt: new Date(),
      user: {
        username: Meteor.user().username,
        directUrl: "http://www.timothylevi.com"
      }
    });

    createMessageInputNode.value = "";
  },

  render() {
    return (
      <section className="message-create-section">
        <form className="message-create-form" onSubmit={this.handleCreateMessage}>
          <h2 className="message-create-title">Create Message</h2>
          <input className="message-create-input" type="text"
            placeholder="Type message and press 'Enter'"
            ref="createMessageInput" />
          <input className="message-create-submit" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
});

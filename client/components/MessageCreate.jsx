MessageCreate = React.createClass({
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

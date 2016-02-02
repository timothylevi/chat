MessageList = React.createClass({
  getInitialState() {
    const messages = Messages.find({});

    return { messages };
  },

  render() {
    const messages = this.state.messages.map((message) => {
      message.timeAgo = DateHelper.time_ago_in_words(message.createdAt);

      return <Message key={message._id} {...message} />;
    });

    return (
      <section className="message-list-section">
        <h2 className="message-list-title">Messages</h2>
        <ul className="message-list-items">{messages}</ul>
      </section>
    );
  }
});

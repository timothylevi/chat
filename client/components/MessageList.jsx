MessageList = React.createClass({
  getInitialState() {
    const messages = [
      {
        _id: "1",
        text: "First message!",
        createdAt: new Date(),
        user: {
          username: "username",
          directUrl: "http://google.com"
        }
      },
      {
        _id: "2",
        text: "Second message!",
        createdAt: new Date() - 1000000,
        user: {
          username: "username",
          directUrl: "http://google.com"
        }
      }
    ];

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

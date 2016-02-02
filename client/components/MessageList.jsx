MessageList = React.createClass({
  render() {
    return (
      <section className="message-list-section">
        <h2 className="message-list-title">Messages</h2>
        <ul className="message-list-items">
          <Message />
        </ul>
      </section>
    );
  }
});

MessageCreate = React.createClass({
  render() {
    return (
      <section className="message-create-section">
        <h2 className="message-create-title">Create Message</h2>
        <input className="message-create-input" type="text" placeholder="Type message and press 'Enter'" />
        <button className="message-create-submit">Submit</button>
      </section>
    );
  }
});

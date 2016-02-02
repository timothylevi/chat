MessageList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('messages', Session.get('room'), Meteor.userId(), Session.get('userId'));

    return {
      messages: Messages.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },

  render() {
    const messages = this.data.messages.map((message) => {
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

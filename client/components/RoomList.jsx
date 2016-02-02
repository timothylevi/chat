RoomList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('allUsernames');

    return { usernames: Meteor.users.find().fetch() };
  },

  render() {
    // TODO: Refactor
    let rooms = [];
    this.data.usernames.forEach((user) => {
      rooms.push(<Room key={user._id} {...user} scope="direct" />);
    });
    if (Meteor.userId()) rooms.unshift(<Room key="global" username="global" scope="global" />);

    return (
      <section className="room-list-section">
        <h2 className="room-list-title">Room List and Search</h2>
        <input className="room-list-search"
          type="text"
          placeholder="Search rooms" />
        <button className="room-list-clear-search">Clear search</button>
        <ul className="room-list-items">{rooms}</ul>
      </section>
    );
  }
});

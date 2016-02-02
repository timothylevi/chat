RoomList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('allUsernames');
    Meteor.subscribe('rooms');

    return {
      usernames: Meteor.users.find().fetch(),
      rooms: Rooms.find().fetch()
    };
  },

  render() {
    const rooms = this.data.rooms.map((room) => {
      return <Room key={room._id} {...room} />;
    });

    const usernames = this.data.usernames.map((user) => {
      return <li key={user._id}>{user.username}</li>;
    });

    return (
      <section className="room-list-section">
        <h2 className="room-list-title">Room List and Search</h2>
        <input className="room-list-search"
          type="text"
          placeholder="Search rooms" />
        <button className="room-list-clear-search">Clear search</button>
        <ul className="room-list-items">{rooms}</ul>
        <ul>{usernames}</ul>
      </section>
    );
  }
});

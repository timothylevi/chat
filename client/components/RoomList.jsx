RoomList = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return { searchString: '' };
  },

  getMeteorData() {
    Meteor.subscribe('allUsernames');
    return { usernames: Meteor.users.find({}).fetch() };
  },

  handleSearchRooms(event) {
    event.preventDefault();

    const searchRoomsInput = ReactDOM.findDOMNode(this.refs.searchRoomsInput);
    const searchString = searchRoomsInput.value.trim();
    this.setState({ searchString: searchString });
  },

  render() {
    const currentUser = Meteor.user();
    let filteredUsers = this.data.usernames.filter((user) => {
      return user.username.toLowerCase().includes(this.state.searchString.toLowerCase()) && user.username !== currentUser.username;
    });
    let sortedUsers = filteredUsers.sort((a, b) => {
      return a.username.toLowerCase() > b.username.toLowerCase();
    });
    let rooms = sortedUsers.map((user) => {
      return <Room key={user.username} {...user} scope="direct" />;
    });
    if (Meteor.userId()) rooms.unshift([
      <Room key="global" username="global" scope="global" />,
      <Room key="self" {...currentUser} scope="direct" />
    ]);

    return (
      <section className="room-list-section">
        <h2 className="room-list-title">Room List and Search</h2>
        <input className="room-list-search"
          type="text"
          placeholder="Type here to filter rooms"
          onChange={this.handleSearchRooms}
          ref="searchRoomsInput"/>
        <ul className="room-list-items">{rooms}</ul>
      </section>
    );
  }
});

App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <User />
        <RoomList />
        <MessageCreate />
        <MessageList />
      </div>
    );
  }
});

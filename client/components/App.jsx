App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <RoomList />
        <MessageCreate />
        <MessageList />
      </div>
    );
  }
});

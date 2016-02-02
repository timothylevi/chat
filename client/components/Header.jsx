Header = React.createClass({
  render() {
    return (
      <header className="site-header">
        <h1 className="site-header-title">Hive Chat</h1>
        <a className="site-header-about-link" href=""
          title="About the Hive Chat project">
          About
        </a>
        <form className="user-form">
          <AccountsUIWrapper />
        </form>
      </header>
    );
  }
});
